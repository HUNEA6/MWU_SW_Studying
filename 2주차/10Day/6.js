// 6. 구조 분해 할당 사용하기
// 객체에서 필요한 것만 꺼내 쓰는 것이 좋습니다.

const person = {
    name : 'Kim Gwan-Hun',
    familyName: 'Kim',
    givenName: 'Gwan-Hun',
    company: 'MWU',
    address: 'Dajeon',
}

const {familyName, givenName} = person;
