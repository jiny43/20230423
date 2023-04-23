const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" },
};
// 우리학원 휴게실 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인 할 수 있게 로직을 구성합니다.
function exampleOne(inputPrice, currency, basicData) {
  let check = true; //q3.잔액체크 ("잔액이 부족합니다.")
  basicData.forEach((snack) => {
    if (snack.price < inputPrice) {
      check = false;
    }
  });
  // Q1
  // 만약 inputPrice가 1000원이라면 currency.thousand.name을 반환하여
  // "일천원권을 넣었습니다".라는 문구를 console.log를 통해 출력하도록 제작.

  //!1)if (inputPrice === 1000) {
  //   console.log("일천원권을 넣었습니다.");
  // }
  console.log(`${inputPrice}원을 넣었습니다.`);

  // Q2
  // 만약 inputPrice가 1000원일 떄, basicData를 통해 구매 가능한 제품을
  // console.log()를 통해 출력

  //!1)
  // if (inputPrice <= 1000) {
  //   basicData.forEach((snack) => {
  //     if (snack.price <= 1000) {
  //       console.log(snack.name);
  //     }
  //   });
  // }
  if (inputPrice) {
    basicData.forEach((snack) => {
      if (snack.price <= inputPrice) {
        console.log(snack.name);
      }
    });
  }

  // Q3
  // 만약 inputPrice가 모든 제품의 가격보다 적다면 "잔액이 부족합니다."라는 문구를
  // console.log()를 통해 출력
  //? 가격이 가장 적은 것 칸쵸 800원 근데 칸쵸 1200원은 넘을 것 같은데 월요일날 가자마자 확인해봐야지 800원 들고가야지
  // if (inputPrice < 800) {
  //   console.log("잔액이 부족합니다.");
  // }
  if (check) {
    console.log("잔액이 부족합니다.");
  }

  // Q4
  // 만약 inputPrice가 모든 제품의 가격보다 많다면 "당신은 부자입니다."라는 문구를
  // console.log()를 통해 출력하세요
  //todo possible 에 모든 제품 넣기
  let possible = [];
  basicData.forEach((product) => {
    if (product.price <= inputPrice) {
      possible.push(product.name);
    }
  });
  console.log(possible);
  //possible배열안에 문자열이 10 개 이상일 때 당신은 부자입니다
  //   if (possible.length >= 10) {
  //     console.log("당신은 부자입니다.");
  //   }
  // }
  console.log(basicData.number); //undefined
  for (let i = 0; i < basicData.length; i++) {
    // console.log(basicData[i].number); //1 2 3 4 5 6 7 8 9 10

    //todo basicdata 의 number 만큼
    if (possible.length >= basicData[i].number) {
      console.log("당신은 부자입니다.");
    }
  }
}
// exampleOne(700, currency, basicData);
// exampleOne(1000, currency, basicData);
exampleOne(2000, currency, basicData);
