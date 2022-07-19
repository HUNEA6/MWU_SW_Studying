// // 명령형 프로그래밍
// function double(arr) {
//     let results = []
//     for(let i=0; i<arr.length; i++){ // "어떻게" 처리하는지에 대한 묘사
//         results.push(arr[i]*2)
//     }
//     return results
// }

// 선언형 프로그래밍
function double(arr){
    return arr.map(number => number *2) // "무엇을" 원하는지에 대한 묘사
}


// 결과 출력
document.querySelector('body').innerHTML = double([1,2,3]);