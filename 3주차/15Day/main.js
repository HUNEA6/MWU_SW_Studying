import TodoList from './TodoList.js'
import TodoComments from './TodoComments.js'

const $app = document.querySelector('.app')

new TodoList ({
    $target: $app,
    initialState:[
    {
        text: 'Learn React',
    },
    {
        text: 'Learn JavaScript'
    },
    {
        text:'Learn TypeScript'
    }
    ]
})

new TodoComments ({
    $target: $app,
    initialState: {
        selectedTodo: {
            text: 'Learn JavaScript'
        },
        comments:[
            {
                text: '안녕하세요'
            },
            {
                text: '반가워요'
            }
        ]
    }
})