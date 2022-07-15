// 7. 비구조화 할당 사용하기
// 함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있습니다.

const makeCompany = ({name, address, serviceName}) => {
    return{
        name,
        address,
        serviceName
    }
};
const MWU = makeCompany({name:'MWU', address:'Dajeon', serviceName:'Present'});

console.log(MWU);

// { name: 'MWU', address: 'Dajeon', serviceName: 'Present' }