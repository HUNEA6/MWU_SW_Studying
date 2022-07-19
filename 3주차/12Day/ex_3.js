// 데이터
const data = [
    {
        name:'나나',
        colors: ['yellow','white'],
        age:7,
        ear:'unfolded'
    },
    {
        name:'차이',
        colors: ['white','yellow','brown'],
        age:3,
        ear:'unfolded'
    },
    {
        name:'모나',
        colors: ['black','white'],
        age:2,
        ear:'unfolded'
    },
    {
        name:'레이',
        colors: ['gray','white'],
        age:7,
        ear:'unfolded'
    },
    {
        name:'가상의 고영이',
        colors: ['gray','black'],
        age:10,
        ear:'folded'
    }
]

// 요구사항!
// 털 색이 검정색이 포함되어 있으면서
// 귀가 접혀있지 않은 고양이를 뽑기

// // 명령형 프로그래밍
// function filterCats(cats){
//     let results = []

//     for(let i=0; i<cats.length; i++){
//         const cat = cats[i]
        
//         if(cat &&
//         cat.colors.includes('black') &&
//         cat.ear === 'unfolded') {
//             results.push(cat.name)
//         }
//     }

//     return results
// }


// 선언형 프로그래밍
function filterCats(cats){
    return cats.filter(cat => cat && cat.colors.includes('black') && cat.ear === 'unfolded')
               .map(cat =>cat.name)
}



// 결과 출력
const filteredCatsName = filterCats(data)
document.querySelector('body').innerHTML = filteredCatsName