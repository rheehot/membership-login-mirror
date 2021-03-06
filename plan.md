## plan
### 19.08.28(수)
1. html 작성
    - header, nav, section, article, footer.
2. vanilla SPA 테스트
    - fragment(`location.hash`)와`window`, `hashchange`를 이용하여 네이티브하게 라우팅할 수 있다. 

### 19.08.29(목)
1. flex box, CSS variable 공부하기
2. 각 form요소에 material design 적용하기 (불가능.. 커스텀 css 적용하기)
3. 중앙 정렬하기
4. 중복되는 요소는 builder를 이용해 동적으로 관리(값과 이벤트 핸들러를 설정 가능)

### 19.08.30(금)
1. 유효성 검사 로직 구현
    1. 윤년 확인
    2. 관심사
2. 모달 구현하기
3. 육진혁님 코드 기반으로 리팩토링하기 (에러 메세지 처리 로직)
4. 스크롤 이벤트 기능 구현하기
5. 약관 동의 체크 기능 구현하기
6. 스낵바 기능 구현하기

### 19.08.31(토)
1. section / article 공부하기 (form, modal, snackbar...)
2. flex 속성 공부하기 및 적용하기
3. css variable 공부하기 (스낵바 bottom...)
4. magic number 공부하기 (무의미하게 반복되는 값들. 유지보수하기 힘들어진다)

### 19.09.01(일)
1. 태그 기능 구현하기 (레퍼런스 찾아보기)
2. select태그에 focus css가 적용 안되는 현상 수정하기
3. 관심사 유효성 검사 기능 구현하기
4. fixed navibation bar 구현하기
5. 정규표현식을 객체를 이용해 리팩토링하기
6. 로그인 페이지 구현

2. 비밀번호 마스킹 문자 변경하기
4. input태그에서 enter입력시 submit버튼이 클릭되지 않게 처리하기

### 19.09.02(월)
1. form입력 데이터를 post로 데이터 보내는 것 고려하기 (FormData 사용)
2. 초기화시 데이터 초기화하기(this.validation, tagInputs 등등..)

### 19.09.03(화)
1. 홈 화면 수정 (로그인과 회원가입을 한 화면에 표시)
2. postRender라는 함수를 만들어, 그안에서 event listener를 등록하는 모든 메소드를 실행시키기.
3. fetch api 공부하기
4. css는 class를 이용해 표현하기
5. json파일들 구조를 리팩토링하기

## 팁들
- 정확히 스타일링하기 위해 reset.css를 include하고 시작할 수도 있음
- 가운데 정렬방법
    - 전체는 div로 감싸고
    - div의 width 값을 지정하고
    - margin: 0 auto; 하면 됨
    - max-width도 설정하면 좋을 듯
- hover 처리 예제
    ```css
    .menu_name:hover {
      border-color: #454545;
      font-weight: bold;
    }
    ```
- 유효성 검사는 `change`이벤트를 이용하면 된다.
- modal 구현 방법
    ```javascript
    const open = document.querySelector("#open");
    const close = document.querySelector("#close");
    
    open.onclick = () => modal.style.display = "flex";
    close.onclick = () => modal.style.display = "none";
    ```
    ```html
    <button id="open">모달열기</button>
    
    <div class="modal-wrapper" style="display: none;">
        <div class="modal">
            <div class="modal-title">모달입니다.</div>
            <p>이러구저러구...</p>
            <button id="close">모달닫기</button>
        </div>
    </div>
    ```
- Naver font 설정
    ```
    body, button, input, select, table, textarea {
    font-size: 12px;
    font-family: Dotum,'돋움',Helvetica,"Apple SD Gothic Neo",sans-serif;
    }
    ```
- css selector(https://www.w3schools.com/cssref/css_selectors.asp)

- detect scroll end
    ```
    function scrolled(e) {
        if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
            scrolledToBottom(e);
        }
    }
    ```
- div 태그로 만든 Layer를 안보이게 하는 두가지 방법  
   1. display:none  <-> block
        
        아예 사라지게 하는것. 보이지도 않고 해당 공간도 존재하지 않게 됨

   2. visibility:hidden <-> visible
   
        보이지만 않고 해당 공간은 존재. width와 height값을 주었다면 그만큼 공간은 존재하게 됨


## 고민할 사항들
- "관심사" 입력 및 표시 방법은 고민을 많이 해봐야 할 듯
    - div 안에 input을 auto로 만들어서 넣고 관심사를 입력하고 쉼표를 누르면 앞에 span을 생성해서 만들어 넣음

- 폼 제출 시, 중복 제출을 방지하는 방법
    - 버튼 클릭시 비활성화 처리
    - 기타등등..

- 윤년검사
    - 2월일때 가능한 숫자가 들어가는 것


- 비밀번호 해싱
    - 이게 과연 필요할지...


- 체크박스
    - [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

- 폰트 관련
    - 단위 : em, rem, px
    - 적용 : 최상위 태그 (body)에 font-family 적용
    - https://ojji.wayful.com/2014/01/HTML-the-diffences-among-Px-Pt-Em-Percnet-for-Font-Size-ect.html

- 네이버는 focus out 하고 비밀번호를 check 함

- 네이버 color 값
    ```
    background-color: #4ec53d;
    ```
    
- modal popup 만드는 방법

    https://new93helloworld.tistory.com/135

- SASS를 사용하면 constant를 define할 수 있음

    `$ npm install -g sass`
    `$ sass source/stylesheets/index.scss build/stylesheets/index.css`
    ```
    @color: #4D926F;

    #header {
      color: @color;
    }
    h2 {
      color: @color;
    }
    ```
    

### 19.09.04
1. 홈 화면 수정하기 (로그인과 회원가입을 한 화면에 표시)
2. Express generator를 이용해 backend 디렉토리 구조 초기화하기
3. 라우팅 기능 구현하기 (API서버처럼 request에 따라 적절한 로직 처리 후 json으로 응답)

### 19.09.05
1. lowDB 기능 구현하기 
2. 회원가입 기능 구현하기
3. 로그인 기능 구현하기


### 19.09.06
1. 쿠키를 이용한 세션 구현하기
2. 로그인 이후 변경된 홈 화면 구현하기
3. 세션 유지 테스트
4. 세션 확인 테스트 (로그인한 유저인지 확인)

### 19.09.07
(태풍으로 인한 휴무...)

### 19.09.08
1. 로그아웃 기능 구현하기
2. 웹팩 적용하기

### 19.09.09
1. aws s3로 배포하기 (쿠키를 못쓰는 치명적인 단점이 존재...)

### 19.09.10
1. 푸터 css 수정하기
2. 서버 url 수정하기 (로컬 -> 오픈한 주소)

### 19.09.11
1. 네비게이션바 css 수정하기
2. 푸터 css 수정하기
3. 메인 css 수정하기
4. process.env를 활용하기 (개발, 배포 모드 설정)
5. sessionName 사용하지 않기 (대신 res의 body에 넣어서 보내자)

### 19.09.12
1. 버튼 css 리팩토링하기 (공통된 코드 상위로 빼내기)
2. 지속가능한 코드를 위해 `ModuleHTML.js` 생성
3. `ModuleHTML.js`를 상속하도록 자식 모듈들 코드 수정

### 19.09.14
1. 로그인하지 않은 상태에서 home화면 진입 시, 로그인 화면으로 리다이렉트하기
2. AWS에서 heroku로 마이그레이션하기

### 19.09.15
1. readme-generator를 이용해 `readme.md` 꾸미기
2. 기존 `readme.md`를 `RS.md`로 변경
