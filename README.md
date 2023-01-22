# 원티드 프리온보딩 프론트엔드 - Week 2-1

원티드 프리온보딩 3차 과제로 B2C 차량대여 서비스(차량 리스트, 차량 상세)를 구현한 웹 사이트입니다.<br>
기업에서 제공한 API 를 사용하였습니다.

[1. 🗒️ 프로젝트 설명](#description) <br>
[2. 🌎 프로젝트 소개](#about-project) <br>
[3. 💟 내가 기여한 부분](#내가-기여한-부분)<br>
[3. 🔫 트러블 슈팅](#trouble-shotting) <br>
[4. 🖥️ 구현 화면](#results)

## Description

**프로젝트 기간**

> 22.11.02 - 22.11.04<br>
[B2C 차량 대여(서비스 링크)](https://pre-onboarding-7th-2-1-5-eta.vercel.app/)<br>
팀원이 각자 기업과제를 수행한 뒤 코드 리뷰를 진행<br>
그 중 Best Practice를 선정하여 선정된 팀원이 수행한 과제 코드의 개선점을 정함<br>
역할을 나누어 개선한 뒤 최종 과제 제출

**👥 팀원 소개**

| 이름        | github                           |
| --------------- |  -------------------------------- |
| 류승연 (팀장)   | https://github.com/seungyeon-rr  |
| 차혜인 (부팀장) | https://github.com/hyeincha      |
| 박지현          | https://github.com/hyoniiii      |
| 배창현          | https://github.com/baechanghyeon |
| 이원준          | https://github.com/dldnjswns31   |
| 임연주          | https://github.com/yeondooo      |
| 지재영          | https://github.com/jaeyeong815   |

<br>

## About Project

### 🛠 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<br>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
<br>

<img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<br>

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"/>
<br><br>

### 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.

```
  REACT_APP_API_URL=https://preonboarding.platdev.net/api/cars
```

2. 의존성 패키지를 설치합니다.

```zsh
$ yarn
```

3. 프로젝트를 실행합니다.

```zsh
$ yarn start
```

- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

<br>

### 🔰 사용한 패키지와 버전

```
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-helmet-async": "^1.3.0",
    "react-router-dom": "^6.4.3",
    "styled-components": "^5.3.6",
    "swiper": "^8.4.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.1",
    "prettier": "^2.7.1",
    "react-snap": "^1.23.0"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">
- axios : 서버와 비동기 통신<br>
- styled-components : 스타일 적용<br>
- react-router-dom : 라우터 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- prettier : 팀원간 코드 포맷 통일<br>
- husky : Git Hooks 적용<br>
- swiper : 메인페이지 슬라이드 구현<br>
- react-helmet-async : SEO 구현시 사용<br>
- react-snap : SEO 구현 시 사용<br> 
</div>
</details>

<details>
<summary>📦 파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜apis.js
 ┣ 📂assets
 ┃ ┗ 📜BackIcon.jsx
 ┣ 📂components
 ┃ ┣ 📂Detail                   // 상세 페이지 차량 정보 컴포넌트
 ┃ ┃ ┣ 📜CarDetail.jsx
 ┃ ┃ ┣ 📜ListContent.jsx
 ┃ ┃ ┣ 📜ListHeader.jsx
 ┃ ┃ ┗ 📜MetaTag.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Cards                  // 메인 페이지 차량 리스트 컴포넌트
 ┃ ┃ ┃ ┣ 📜CardItem.jsx
 ┃ ┃ ┃ ┣ 📜CardList.jsx 
 ┃ ┃ ┃ ┣ 📜CardSlide.jsx 
 ┃ ┃ ┃ ┗ 📜NewItemTag.jsx
 ┃ ┃ ┗ 📂Category               // 메인 페이지 카테고리 컴포넌트 (nav)
 ┃ ┃ ┃ ┣ 📜Category.jsx
 ┃ ┃ ┃ ┣ 📜CategoryFilter.jsx
 ┃ ┃ ┃ ┗ 📜CategoryTag.jsx
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📜Guide.jsx               // 차량이 없는 경우와 로딩중인 경우 안내문구
 ┃ ┃ ┗ 📜Header.jsx
 ┣ 📂context
 ┃ ┗ 📜CarContext.js             // Context API
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜color.js
 ┣ 📂utils
 ┃ ┣ 📜axios.js
 ┃ ┣ 📜carAttribute.js            // 상수 데이터
 ┃ ┣ 📜comma.js                   // 3자리 숫자마다 콤마
 ┃ ┣ 📜conversionDate.js          // 날짜(월, 일, 요일) 치환하는 함수
 ┃ ┣ 📜getDateDiff.js             // 신규 뱃지 확인하는 함수
 ┃ ┗ 📜getKeyByValue.js           // 객체의 키와 값을 반환하는 함수
 ┣ 📜App.js
 ┣ 📜Router.jsx
 ┗ 📜index.js
 ```

</div>
</details>
<br>

### ✅ 필수 요구사항
- Figma 상의 디자인 및 기능 구현
    - 차량 리스트
        - 차량이 없을 때 처리
        - 차량 불러오는 중 처리
    - 차량 상세

### ✅ 추가 구현 사항
- SEO
    - 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
        - 제목: car.brand + car.name
        - 내용: 월 car.amount 원
        - 사진: 차량 사진
<br>

### ✨ 주요 기능 정리

| 페이지             | API 연결 및 기능                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 차량 리스트 | - 차량이 없을 때 처리<br> - 차량 불러오는 중 처리<br> - 업데이트된 지 24시간이 채 되지 않은 차량은 신규 뱃지 표시|
| 차량 상세        | - 차량의 상세 정보 표시<br>- ‘브랜드, 차종, 연료타입, 이용 가능일, 대여료, 보험, 추가 상품' 표시<br>- 추가 상품이 없는 경우 해당 영역이 뜨지 않도록 구현<br>|
| 공통 헤더        | - 두 페이지는 공통 헤더를 공유합니다.<br>- 헤더에는 전체 차량 / 차량 상세가 표시됩니다.<br> - 상세 페이지에는 리스트로 돌아가는 버튼이 구현되어 있습니다.       |

<br>

## 내가 기여한 부분

### 1) Best Pracice로 선정된 이유

[관련 Merged](https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-1-5/pull/17)

**1. Context API**

props를 넘겨주지 않아도 각 component에서 전역적으로 관리되는 데이터를 필요한 곳에서만 사용할 수 있도록 구현했습니다.

https://github.com/jaeyeong815/B2C-car-service/blob/1f0e3e3052108a98d42aeaabc9bdf2d0b475571a/src/components/Main/Cards/CardSlide.jsx#L13-L35

**2. Swiper Slider**

Swiper Slider 라이브러리를 사용하여 페이지를 넘기면 다음 카테고리로 이동할 수 있도록 구현했습니다.<br>
이를 통해 사용자가 서비스를 더욱 편하게 이용할 수 있도록 했습니다.

<img src='https://user-images.githubusercontent.com/85178602/199873891-c70f8a30-9939-4cd3-938c-c958428b79ca.gif' alt='동작gif' width="300" />

https://github.com/jaeyeong815/B2C-car-service/blob/1f0e3e3052108a98d42aeaabc9bdf2d0b475571a/src/components/Main/Cards/CardSlide.jsx#L13-L35

**3. 관심사의 분리**

공통으로 사용되는 컴포넌트를 분리하여 재사용성을 높였으며 한 컴포넌트에는 한가지 역할만 있도록 구현했습니다.<br>
또한 여러번 사용하는 함수는 utils에 따로 분리하여 필요한 곳에서 호출하여 사용할 수 있도록 구현했습니다.

<details>
<summary>📦 구현했던 파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜apis.js
 ┣ 📂assets
 ┃ ┗ 📜BackIcon.jsx
 ┣ 📂components
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📜CarDetail.jsx
 ┃ ┃ ┣ 📜ListContent.jsx
 ┃ ┃ ┗ 📜ListHeader.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Category
 ┃ ┃ ┃ ┣ 📜Category.jsx
 ┃ ┃ ┃ ┣ 📜CategoryFilter.jsx
 ┃ ┃ ┃ ┗ 📜CategoryTag.jsx
 ┃ ┃ ┣ 📜CardItem.jsx
 ┃ ┃ ┣ 📜CardList.jsx
 ┃ ┃ ┣ 📜CardSlide.jsx
 ┃ ┃ ┗ 📜NewItemTag.jsx
 ┃ ┣ 📜Guide.jsx
 ┃ ┗ 📜Header.jsx
 ┣ 📂context
 ┃ ┗ 📜CarContext.js
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜color.js
 ┣ 📂utils
 ┃ ┣ 📜category.js
 ┃ ┣ 📜comma.js
 ┃ ┣ 📜conversionDate.js
 ┃ ┣ 📜conversionFuelType.js
 ┃ ┗ 📜conversionSegment.js
 ┣ 📜App.js
 ┣ 📜Router.jsx
 ┗ 📜index.js
```

</div>
</details>

<br>

### 2) 이후 개선한 점

**1. SEO 최적화**

react-helmet과 react-snap을 이용하여 SEO 최적화를 하였습니다.

**2. axios 인스턴스를 생성하여 모듈화**

여러번 사용되는 서버 URL을 baseUrl로 설정하여 axios 인스턴스를 생성하면서 코드 중복 최소화하였습니다.

**3. 카테고리, 차량 정보 등 문자열 상수화**

기능을 구현하면서 또는 유지보수를 하면서 오타로 인한 오류를 방지하기위해 상수화하였습니다.

<br>

## Trouble Shotting

### SEO 설정

`react-helmet`은 비동기 데이터 처리에 문제가 생길 수 있어, 비동기 데이터 처리를 돕는 `react-helmet-async` 라이브러리를 사용했습니다.<br>
하지만 `<meta>` 태그가 크롤링 된 이후 데이터를 받아오기 때문에 웹 페이지에에서 `<meta>` 태그에 데이터가 반영되지 않는 문제를 발견했습니다.<br>
이러한 문제점으로 지정한 페이지들을 일정 시간이 지난 뒤 크롤링하여 `index.html`로 랜더링 후 `build` 폴더에 저장하는 `react-snap`을 사용했으나<br>
`build` 단계에서 페이지 별 `index.html`이 생성되지 않아 여전히 `<meta>` 태그에 데이터가 반영 되지 않았습니다.

- **에러 발생 원인** : 페이지 이동 동작을 `useNavigate()`로 구현하였고<br>`react-snap`은 `useNavigate()`로 이동된 페이지의 세부 내용을 감지하지 못했습니다.
- **해결 방법** : `useNavigate()` 를 쓰는 대신 각 리스트를 `<Link>`태그를 사용해서<br>`<meta>` 태그가 적용된 각 index.html 파일이 생성된 것을 확인하고 해결했습니다.
https://github.com/jaeyeong815/B2C-car-service/blob/b4b0cbf1fec50806f0c9dfb7efa8b4b84984e7af/src/components/Main/Cards/CardList.jsx#L18-L36

- 참고했던 링크 : [[공식 GitHub](https://github.com/stereobooster/react-snap)] [[블로그](https://jinn2u.tistory.com/16)]

<br>

## Results

### slide 기능, 카테고리 조회 기능, 차량 상세

<img src='https://user-images.githubusercontent.com/85178602/213916313-75d1d9a0-9c6c-4807-891e-a40388c7d148.gif' width='300px' alt='동작화면' />

### 메인 캡쳐

<img width="300" alt="메인" src="https://user-images.githubusercontent.com/85178602/213916420-6c4e9fb7-1805-492c-a546-d5a75730a3ef.png">

### 차량 상세 캡쳐

<img width="300" alt="상세" src="https://user-images.githubusercontent.com/85178602/213916424-d136d4de-7ee5-4b68-8910-36c4f23f3488.png">
