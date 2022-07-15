// 5. &&와 || 활용
// &&와 ||는 조건문 외에서도 활용될 수 있습니다.

/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
// const name = participantName || 'Guest';

/// &&
// falg가 true일 경우에만 실행됩니다.
//flag && func();

// 객체 병합에도 이용할 수 있습니다.
const makeCompany = (showAddress) => {
    return{
        name: 'MWU',
        ...showAddress && {address: 'Dajeon'}
    }
};

//console.log(makeCompany(flase));
// {name: 'MWU'}
console.log(makeCompany(true));
// {name: 'MWU', address: 'Dajeon'}