const logger = (function() {
    // logCount는 밖에서 접근할 수 없다. 일종의 private 효과
    // 즉, 내부에서만 쓰고 외부에선 접근하거나 건들이지 못하게 할 경우 사용하는 패턴
    // logger만 전역에 묶이고 안에 선언된 변수나 함수들은 전역에 묶이지 않아서 전역 오염을 최소화할 수 있다.
    // 필요한 것을 모듈화 해서 쓰는 방법 중 하나!
    let logCount = 0;
    function log(message){
        console.log(message);
        logCount = logCount + 1;
    }
    function getLogCount(){
        return logCount;
    }
    return{
        log: log,
        getLogCount: getLogCount
    }
})()

logger.log('punk rock band Idiots!')
logger.log('bye')
console.log(logger.getLogCount())
console.log(logger.logCount)