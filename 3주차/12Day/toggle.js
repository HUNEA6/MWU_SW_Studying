// 요구사항!
// 버튼 3개를 만든다.
// 만든 버튼을 화면에 그린다.
// 버튼을 클릭하면 삭선이 그어진다.


// // 명령형 프로그래밍
// // 버튼 3개를 만든다.
// const $button1 = document.createElement('button')
// $button1.textContent = 'Button1'

// const $button2 = document.createElement('button')
// $button2.textContent = 'Button2'

// const $button3 = document.createElement('button')
// $button3.textContent = 'Button3'

// // 만든 버튼을 화면에 그린다.
// const $main = document.querySelector('body')

// $main.appendChild($button1)
// $main.appendChild($button2)
// $main.appendChild($button3)

// // 버튼을 클릭하면 삭선이 그어진다.

// const toggleButton = ($button) => {
//     if($button.style.textDecoration === 'line-through'){
//         $button.style.textDecoration = 'none'
//     } else {
//         $button.style.textDecoration = 'line-through'
//     }
// }
// document.querySelectorAll('button').forEach($button => {
//     $button.addEventListener('click', (e) => {
//         const{target} = e
//         toggleButton(target)
//     })
// })



// 선언형 프로그래밍
function ToggleButton({$target, text, onClick}) {
    const $button = document.createElement('button')
    $target.appendChild($button)
    let clickCount = 0;

    this.render = () => {
        $button.textContent = text
    }

    $button.addEventListener('click', () =>{
        clickCount++
        if($button.style.textDecoration === 'line-through'){
            $button.style.textDecoration = 'none'
        }else {
            $button.style.textDecoration = 'line-through'
        }
        if(onClick){
            onClick(clickCount)
        }
    })

    this.render()
}

const $app = document.querySelector('body')

new ToggleButton({
    $target: $app,
    text: '버튼1',
    onClick: (clickCount) => {
        if(clickCount % 3 === 0){
            alert('3번째 클릭!')
        }
    }
})
new ToggleButton({
    $target: $app,
    text: '버튼2',
    onClick: (clickCount) => {
        if(clickCount % 2 === 0){
            alert('두번째 클릭')
        }
    }
})
new ToggleButton({
    $target: $app,
    text: '버튼3',
})
new ToggleButton({
    $target: $app,
    text: '버튼4',
})