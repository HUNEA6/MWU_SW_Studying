import App from "./App.js"
import Editor from "./Editor.js"
import { getItem, setItem } from "./storage.js"

const $target = document.querySelector('#app')


// new App({ $target })

const TEMP_POST_SAVE_KEY = 'temp-post'

const posts = getItem(TEMP_POST_SAVE_KEY, {
    title:'',
    content:''
})

console.log(posts)

new Editor ({ 
    $target,
    inititalState: {
        title: '오늘의 학습일지',
        content: 'TypeScript'
    },
    onEditing: (post) => {
        setItem('temp-TEMP_POST_SAVE_KEY', {
            ...post,
            tempSaveDate: new Date()
        })
    } 
})