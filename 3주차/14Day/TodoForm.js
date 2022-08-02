function TodoForm({ $target, onSubmit }){
    const $form = document.createElement('form')

    $target.appendChild($form)
    
    let isInit = false

    this.render = () => {
        $form.innerHTML = `
        <input type="text" name="todo" />
        <button>Add</button>
        `

        if(!isInit){
         // 태그가 갖는 고유 기능을 없애준다. (이 코드에서는 새로고침 되는거 방지해줌)
         $form.addEventListener('submit', e=> {
             e.preventDefault()

             const $todo = $form.querySelector('input[name=todo]')
             const text = $todo.value

             if(text.length >1){
             $todo.value = ''
             onSubmit(text)
            }
         })
         isInit = true
        }
    }

    this.render()
}