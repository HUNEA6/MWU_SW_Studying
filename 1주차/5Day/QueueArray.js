class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    // 값이 들어오는 enqueue
    enqueue(value) { 
        this.queue[this.rear++] = value;
    }

    // 값이 나가는 dequeue
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    // queue의 가장 앞에있는 함수를 알아내는 방법
    peek(){
        return this.queue[this.front];
    }

    // 큐의 사이즈
    size(){
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);

console.log(queue.dequeue());
queue.enqueue(8);

console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());