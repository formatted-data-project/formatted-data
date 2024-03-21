# formatted-data

formatted-data는 API 응답 및 요청 등에서 받은 데이터를 클라이언트 측에서 사용하기 쉽도록 가공하는 데 유용합니다. 이는 코드의 가독성을 높이고 유지 보수를 쉽게 만들어 줍니다.

## 특징

- 외부 의존성이 없습니다. (경량화)
- 입력된 데이터의 Key값을 카멜 케이스로 변환된 형태로 반환합니다.

## 설치

```bash

npm install formatted-data

```

## 사용법

```js
import { formattedData } from "formatted-data.js";

const test = formattedData({
    id: 1,
    category_id: 1,
    ...
})

/* output [{
    id: 1,
    categoryId: 1,
    ...
}] */

```

## 기여하기

1. 저장소를 Fork 해주세요.
2. 새 브랜치를 만들고 코드에 관한 수정 사항을 push 해주세요.
3. PR을 요청하고 문서의 양식에 맞춰 내용을 기입해 주세요.

## 라이센스

MIT 라이센스에 따라 제공되는 오픈 소스 라이브러리입니다.
