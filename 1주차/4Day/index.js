// 생성자
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //요소 찾기
    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //요소 추가(끝 부분)
    // newNode = 새로 추가된 노드
    // newValue = 입력받은 새로운 값

    append(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size +=1;
    }

    //요소 추가(중간 부분)
    
    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode; 
        this.size += 1;
    }

    //요소 삭제
    remove(value) {
        let prevNode = this.head;
        while (prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }

        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next;
        }
        this.size -= 1;
    }

    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString += `${currNode.value}, `;  
            currNode = currNode.next;
        }

        if(displayString.length === 1){
            console.log("[]");
        } else {
        displayString = displayString.substring(0, displayString.length -2);
        displayString += "]";
        console.log(displayString);
    }
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
