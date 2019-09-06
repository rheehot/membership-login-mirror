const express = require('express');
const router = express.Router();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const uuid = require('uuid/v4');

// prevent CORS error
function setHeader(res, options) {
    if (options.cors) {
        res.set({
            'Access-Control-Allow-Origin': options.cors.url ? options.cors.url : 'http://localhost:63342',
            'Access-Control-Allow-Methods': options.cors.method ? options.cors.method : 'GET, POST, PATCH, DELETE',
            'Access-Control-Allow-Credentials': true,
        });
    }
    if (options.cookie) {
        res.cookie('sessionId', `${options.cookie.sessionId}`);
        res.cookie('sessionName', `${options.cookie.sessionName}`);
    }

    return res;
}

function isDuplicatedId(id) {
    return db.get('users')
        .find({id: id})
        .value();
}

function isLoggedIn(sessionId) {
    return db.get('sessions')
        .find({sessionId})
        .value();
}

// set default db
db.defaults({users: []})
    .write();
db.defaults({sessions: {}})
    .write();


/* GET users listing. */
router.get('/', function (req, res, next) {
});

router.get('/checkId/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: !isDuplicatedId(req.params.id)
    });
});

router.get('/isLoggedIn', function (req, res) {
    setHeader(res, {
        cors: {}
    }).send(!!isLoggedIn(req.cookies.sessionId));
});

router.post('/signUp', function (req, res) {
    const isDuplicated = isDuplicatedId(req.body.id);

    if (!isDuplicated) {
        db.get('users')
            .push(Object.keys(req.body).reduce((acc, key) => {
                acc[key] = req.body[key];
                return acc;
            }, {}))
            .write();
    }

    setHeader(res, {
        cors: {}
    }).json({
        result: !isDuplicated,
    });
});

router.post('/login', function (req, res) {
    const userResult = db.get('users')
        .find({
            id: req.body.id,
            pw: req.body.pw
        })
        .value();

    if (userResult) {
        // 세션 조회
        const sessionResult = db.get('sessions')
            .find({
                id: req.body.id
            })
            .value();

        let sessionId = undefined;
        if (!sessionResult) {
            // 세션 생성, 저장
            sessionId = uuid();
            db.get('sessions')
                .push({
                    id: req.body.id,
                    sessionId
                })
                .write();
        } else {
            sessionId = sessionResult.sessionId;
        }

        // 쿠키를 이용해 세션 설정
        setHeader(res, {
            cors: {},
            cookie: {
                sessionId,
                sessionName: userResult.name
            }
        }).send(true);
    } else {
        setHeader(res, {
            cors: {},
        }).send(false);
    }
});

router.patch('/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: true,
        message: `${req.params.id} : updated`
    });
});

router.delete('/:id', function (req, res) {
    setHeader(res, {
        cors: {}
    }).json({
        result: true,
        message: `${req.params.id} : deleted`
    });
});

module.exports = router;
