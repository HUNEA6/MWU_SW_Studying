// 3. 배열 내 같은 요소 제거하기
// Set을 이용할 수 있습니다.

const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

// 3점 표기법(...) - 객체나 배열의 {} 또는 []를 벗겨내준다. - 원하는 배열 또는 객체를 반환해준다.
// const a = [1,2];     
// const b = [...a,...a];   // [1,2,1,2]

console.log(names);                     // [ 'Lee', 'Kim', 'Park', 'Lee', 'Kim' ]
console.log(uniqueNamesWithArrayFrom);  // [ 'Lee', 'Kim', 'Park' ]
console.log(uniqueNamesWithSpread);     // [ 'Lee', 'Kim', 'Park' ]
