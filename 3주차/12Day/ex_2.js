// // 명령형 프로그래밍
// function double(arr) {
//     let results = []
//     for(let i=0; i<arr.length; i++){         // "어떻게" 처리하는지에 대한 묘사
//         if(typeof arr[i] === 'number'){      // number 타입만 걸러준다.
//         results.push(arr[i]*2)
//         }
//     }
//     return results
// }

// 선언형 프로그래밍
function double(arr){
    return arr.filter(param => typeof param === 'number')   // 선언형은 계속 이런 식으로 조건을 추가해 주면 된다. 딱딱 끊어서 조건 추가하는 사고를 키우면 좋다.
              .map(number => number *2)                     // "무엇을" 원하는지에 대한 묘사
}


// 결과 출력
document.querySelector('body').innerHTML = double([1,2,3,'',null]);