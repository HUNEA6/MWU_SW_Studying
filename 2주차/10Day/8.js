// 8. 동적 속성 이름
// ES6에 추가된 기능으로 객체의 키를 동적으로 생성 할 수 있습니다.

const nameKey = 'name';
const emailKey = 'email';
const person = {
    [nameKey]: 'Kim Gwan-Hun',
    [emailKey]: 'hunea6686@naver.com'
};
console.log(person);

// { name: 'Kim Gwan-Hun', email: 'hunea6686@naver.com' }