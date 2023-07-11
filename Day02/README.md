# 퀴즈

## 1. “타입”이 바닐라 자바스크립트보다 유용하며 큰 이점을 제공하는 이유는 무엇인가요?

### 타입을 사용하면 오류를 미리 감지하고 일부 런타임 오류를 방지할 수 있습니다.

## 2. 다음 코드는 컴파일 오류를 발생시키나요?

```

let userName: string;
userName = 'Maximilian';
userName = false
```

### 네

## 3. 이 코드는 타입 추론에 의존하나요?

```
const age: number = 29;
```

### 타입이 명시적으로 할당 됨

## 4. 자바스크립트 타입 (예. typeof 'Max' => 'string')과 타입스크립트 타입 (예. const name: string = '...')의 차이는 무엇인가요?

### 타입스크립트 타입은 컴파일 중에 확인되는 반면, 자바스크립트 타입은 런타임 중에 학인 됨

## 중첩된 개체 및 타입

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```
