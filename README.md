# 배송조회 심플 앱

## 실행

개발을 위해 실행 하기 위해서는 NPM패키지를 최초에 한번 설치 하여야 합니다.

```bash
yarn install
```

서버에서 [스마트택배의 배송조회 API](https://tracking.sweettracker.co.kr)를 활용하므로 `.env` 혹은 `.env.local`파일에 아래와 같이 배송조회 API Key를 정의하여야 합니다. 이와 관련하여 `.env.local.sample`파일을 참조 해 주세요.

```
SWEET_TRACKING_API_KEY=AAAAAAAAAAAA
```

해당 앱의 개발은 Create React APP(CRA)를 이용하여 개발 되었으며, 서버는 Express를 활용 합니다.

```bash
yarn start
```
