const data = [
    {
        text: 'JavaScript 공부하기'
    },
    {
        text: 'JavaScript 복습하기'
    }
]

// const data1 = [
//     {
//         text: '베이스 연습하기'
//     },
//     {
//         text: '턱걸이 하기'
//     },
//     {
//         text:'공부 하기'
//     }
// ]

const $app = document.querySelector('.app')

new App({
    $target: $app,
    initialState: data
})

// App.js 생성으로 인해 코드가 간단해졌다.
// new TodoForm({
//     $target: $app,
//     onSubmit: (text) => {
//         const nextState = [...todoList.state, {
//             text
//         }]
//         todoList.setState(nextState)
//     }
// })

// const todoList = new TodoList({
//     $target: $app,
//     initialState: data
// })



// new TodoList({
//     $target: $app,
//     initialState: data1
// })

// new TodoList({
//     $target: $app,
//     initialState: [
//         {
//             text: '이디어츠 공연 보기'
//         },
//         {
//             text: '로토 팔로우 하기'
//         }
//     ]
// })