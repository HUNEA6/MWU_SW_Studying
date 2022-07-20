// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
function TodoList(params) {
    const $todoList = document.createElement('div');
    const $target = params.$target;
    $target.appendChild($todoList);

    this.state = params.initalState;

    this.render = () => {
        $todoList.innerHTML =`
            <ul>
                ${this.state.map(todo=> `<li>${todo.text}</li>`).join('')}
            </ul>
        `
    }

    this.render();
}