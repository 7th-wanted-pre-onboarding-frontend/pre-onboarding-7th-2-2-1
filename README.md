# 원티드 프리온보딩 2-1 1팀

## 배포 링크

[**누르시면 이동합니다!**](https://pre-onboarding-7th-2-2-1.vercel.app/dashboard)

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 박승민(팀장) | https://github.com/pmb087      |
| 김정현       | https://github.com/task11      |
| 김준호       | https://github.com/kimjuno97   |
| 윤태성       | https://github.com/taesung1993 |
| 임형섭       | https://github.com/4hsnim      |
| 조서연       | https://github.com/sycho09     |

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 실행 방법

1. 프로젝트 관련 라이브러리를 설치합니다.

```bash
npm install
```

2. 프로젝트를 실행합니다.

```bash
npm start
```

# 디렉토리 구조

```
📦 src
┣ 📂 api /- 컴포넌트 집합
┣ 📂 assets
┃ ┗ 📂 image /- 이미지 관리
┣ 📂 component /- 레이아웃에 구성될 컴포넌트
┣ 📂 layouts /- 페이지에 구성될 레이아웃
┃ ┣ 📂 Header
┃ ┣ 📂 Main
┃ ┣ 📂 Section
┃ ┗ 📂 Sidebar
┣ 📂 pages /- 페이지 관리
┃ ┣ 📂 AdSetupPage /- 광고 관리 페이지
┃ ┗ 📂 DashboardPage /- 대시 보드 페이지
┣ 📂 store /- Recoil 전역관리 파일 및 데이터 타입관리
┣ 📂 styles /- Styled-Component 글로벌 스타일, 테마
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 constants /- 상수 데이터 관리
┃ ┣ 📂 hooks /- 커스텀 훅 관리
┃ ┣ 📂 makeData /- 데이터 포맷 함수 관리
┃ ┣ 📂 types /- 데이터 타입 관리
┣ 📜 Router.js /- 라우터 관리 컴포넌트
┣ 📜 App.js
┗ 📜 index.js
```

# 동료학습

## Projects

각자 과제 구현 후 Github Discuussion을 통한 토론 결과로 best practice를 산출하여 리팩토링하는 방식을 채택했습니다.

1. Discussion을 통한 Best base code 채택
2. 기능 별 Best practice 선정
3. Base code를 Best practice 코드로 리팩토링
4. PR은 3명 이상으로부터 approved 되어야 merge 가능

> ### 코드 및 커밋 컨벤션은 Git Hooks와 husky를 사용해 자동화했습니다.

## Code Convention

- [prettier](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.prettierrc.json)
- [eslint](https://github.com/7th-wanted-pre-onboarding-frontend/assignment-week1-1/blob/main/.eslintrc.js)

## Commit Convention

### commitlint

- 사용 이유: 팀의 생산성 향상과 커밋 메세지 히스토리의 관리를 위해 통일성이 필요하다고 판단하였기 때문에 사용하였습니다.
- [Commitlint 문서](https://commitlint.js.org/#/)를 참고하여 설정하였습니다.

  <img width="689" alt="2022-10-28_08 33 50" src="https://user-images.githubusercontent.com/56210700/198418936-4d3fc67a-7bf2-40b5-bf80-421d235c4621.png">

# best practice 토론 과정

- [Organization](https://github.com/7th-wanted-pre-onboarding-frontend)을 만들어 [Discussion](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/categories/-c-2-1-assignment)을 이용하여 서로의 의견을 공유하여 best practice를 도출하였습니다.

# best practice 선정 이유

## 1. Day-Picker

- 광고 관리 페이지의 통계 특성상 주간, 일간 필터링을 구현해야하고 날짜의 범위 선택이 자유로워야 했습니다.
- 구현한 페이지의 테마에 어울리는 디자인을 구현해야 했습니다.
- 러닝커브가 낮고 프로젝트에 적용할 때 어색한 부분이 없어야 합니다.

때문에 캘린더 관련 라이브러리 중 `Day-Picker`를 **BestPractice**로 선정했습니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-2-1/blob/c82453bca1eb33a210bb546c8631789ec71d3d7e/src/components/DashboardDataPicker/DashboardDataPicker.js#L1-L36

## 2. Advertisement Graph

- 과제의 요구 사항인 두번째 레이어를 선택했을 경우 우측에 새로운 `Y-axis`가 생성되야 합니다.
- 라이브러리의 그래프 디자인이 페이지의 테마와 어울려야 합니다.

때문에 그래프 차프 라이브러리 중 `Apexcharts`를 **BestPractice**로 선정했습니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-2-1/blob/c82453bca1eb33a210bb546c8631789ec71d3d7e/src/components/GraphChart/GraphChart.js#L1-L144

## 3. Recoil State 선언부

- 받아오는 데이터의 타입을 `InitialState`로 미리 선언하여, 페이지 로딩시 처음에 보여줄 데이터를 작성자가 선택할 수 있게 구현한 점이 좋았습니다

때문에 `Recoil 선언부` 중 **`김정현`** 님의 로직을 **BestPractice**로 선정했습니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-2-1/blob/c82453bca1eb33a210bb546c8631789ec71d3d7e/src/api/adList.js#L1-L13

## 3. API Fetching Time

- 데이터를 `Fetching` 받는 시점에 `setTimeout`을 이용하여 과제의 요구 사항인 임의의 로딩 시간을 구현한 점이 좋았습니다.
- 파일을 따로 분리하여 다른 파일에서 해당 `API` 호출을 사용 할 때 상기한 로직을 모르게 하는 점이 좋았습니다.

때문에 `API Fetching Time` 로직 중 **`김정현`** 님의 로직을 **BestPractice**로 선정했습니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-2-2-1/blob/c82453bca1eb33a210bb546c8631789ec71d3d7e/src/api/adList.js#L1-L13

# 사용 라이브러리

### production

- axios
- styled-components
  - styled-reset
- Recoil
- react-day-picker
- Apexcharts

### dev

- commitlint
- eslint
- prettier
- husky
