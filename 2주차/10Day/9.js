// 9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
// !! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경할 수 있습니다.

function check(variable) {
    if(!!variable){
        console.log(variable);
    } else {
        console.log('잘못된 값');
    }
}
check(null);        // 잘못된 값
check(3.14);        // 3.14
check(undefined);   // 잘못된 값
check(0);           // 잘못된 값
check('Good');      // Good
check('');          // 잘못된 값
check(NaN);         // 잘못된 값
check(5);           // 5