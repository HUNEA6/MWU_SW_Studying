// // 배열 생성방법 공부
// const arr1 = new Array();
// const arr2 = [];
// const arr3 = [1,2,3,4,5];
// const arr4 = new Array(5);
// // fill 함수를 사용하여 갯수 제한 없이 한번에 초기화
// const arr5 = new Array(5).fill(5);


// // 1,2,3,4,5로 출력하기 위하여 from 함수 이용
// // <from 함수 형식> 
// // const arr6 = Array.from(초기화 할 배열, 로직(배열의 값, 배열의 인덱스) {
// // return k + 1 >> 배열의 인덱스가 0부터 시작하기 때문에 +1  
// //}

// const arr6 = Array.from(Array(5), function(v , k) {
//     return k + 1 ;
// });

// 배열 출력해보기
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);

// ------------------------------------------------------------------------------------------------

// // 길이(length 공부)
// const arr = [1,2,3,4,5];
// console.log(arr.length);
// //length를 직접 조작할 수 있다. (이 방법은 사용하지 않는 것을 권장)
// arr.length = 3;
// console.log(arr);
// arr.length = 10;
// console.log(arr);

// ------------------------------------------------------------------------------------------------

// // 배열의 편리한 함수 공부  
// const arr = [1,2,3,4,5,6];
// // 1. 배열을 하나의 문자열로 합치는 join 함수
// console.log(arr.join(", "));
// // 2. 모든 배열을 거꾸로 돌려주는 reverse 함수
// console.log(arr.reverse());
// // reverse 함수 사용 시 주의할 점! 한번 사용하면 원래 배열에도 영향을 끼침
// console.log(arr);
// // 3. 두 배열을 합쳐주는 concat 함수
// const arr1 = [1,2,3,4,5,6];
// const arr2 = [7,8,9,10];
// // 배열명.concat(합칠 배열명);
// console.log(arr1.concat(arr2));

// ------------------------------------------------------------------------------------------------

// // 배열의 요소를 추가 및 삭제하는 방법 공부
// const arr = [1,2,3,4,5,6];

// // // 1. 배열의 끝 부분을 추가하고 삭제해주는 push, pop 함수
// // // push 함수 : 배열의 끝 부분에 추가해준다.(하나 또는 여러개 추가 가능)
// // arr.push(7);
// // arr.push(7,8,9);
// // console.log(arr);
// // // pop 함수 : 배열의 끝 부분을 삭제해준다.
// // arr.pop(); // 9 제거
// // arr.pop(); // 8 제거
// // console.log(arr.pop()); // pop의 return 값은 마지막 부분인 7이 나온다.
// // console.log(arr);


// // // 2. 배열의 첫 번째 부분을 추가하고 삭제해주는 shift, unshift 함수
// // // shift 함수 : 배열의 첫 번째 부분을 제거해준다.
// // arr.shift();
// // arr.shift();
// // console.log(arr);
// // // unshift 함수 : 배열의 첫 번째 부분을 추가해준다.
// // arr.unshift(10);
// // console.log(arr);


// // // 3. 배열 중간을 잘라서 값을 알고 싶을 때 사용하는 slice 함수
// // // slice(시작 요소, 끝 요소)
// // // 끝 요소 주의!!! 끝 요소의 바로 직전까지 짤리기 때문에 ex) arr배열의 3,4를 자르고 싶으면 4번째 자릿수를 넣어야 직전까지 잘려서 3,4만 잘림
// // console.log(arr.slice(2,4));
// // // slice 함수는 원래 배열에 영향을 끼치지 않으니 주의!!
// // console.log(arr);


// // // 4. 배열 중간의 요소를 삭제하고 싶을 때 사용하는 splice 함수
// // // splice(시작 요소, 몇 개의 요소를 삭제할 지 개수) ex) arr배열의 가운데 3,4만 삭제하고 싶으면 splice(2,2)
// // arr.splice(2,2);
// // console.log(arr);

// ------------------------------------------------------------------------------------------------

// // 배열의 순회 공부
// const arr = [1,2,3,4,5,6];

// // // 순회의 정석 for문 
// // for(let i = 0; i < 6; i+= 1) {
// //     console.log(arr[i]);
// // }

// // // 조금 더 편한 for of문
// // for (const item of arr){
// //     console.log(item);
// // }

