// 객체 생성시 키 생략하기
// 객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있습니다.

const name = 'Kim Gwan-Hun';
const company = 'MWU';
const person = {
    name,
    company
}
console.log(person);

// { name: 'Kim Gwan-Hun', company: 'MWU' }