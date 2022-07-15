// 4. Spread 연산자를 이용한 객체 병합
// 두 객체를 별도 변수에 합쳐줄 수 있습니다.

const person = {
    name: 'Kim Gwan-Hun',
    familyName: 'Kim',
    givenName: 'Gwan-Hun'
};

const company = {
    name: 'MWU',
    address: 'Dejeon'
};

const KimGwanHun = { ...person, ...company};
console.log(KimGwanHun);


//  {
//     name: 'MWU',     = 같은 키는 우선 순위에 따라 정해진다.
//     familyName: 'Kim',
//     givenName: 'Gwan-Hun',
//     address: 'Dejeon'
//   }