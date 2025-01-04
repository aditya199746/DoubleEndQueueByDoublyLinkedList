


class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class doubleEndedQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueEnd(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.tail;
            newNode.prev = this.head;
        } else{
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.render()
    }

    enqueStart(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.tail;
            newNode.prev = this.head;
        } else{
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode
        }
        this.render()
    }

    dequeueEnd(){
        if(this.tail == this.head){
            this.tail = null;
            this.head = null;
        }
        else{
            this.head.prev = this.tail.prev;
            this.tail.prev.next = this.head;
            this.tail = this.tail.prev; 
        }
        this.render()
    }

    dequeueStart(){
        if(this.tail == this.head){
            this.tail = null;
            this.head = null;
        }
        else{
            this.tail.next = this.head.next;
            this.head.next.prev = this.tail;
            this.head = this.head.next; 
        }
        this.render()
    }

    print(){
        if (!this.head) {
            console.log("Queue is empty.");
            return;
        }

        let itr = this.head;
        do {
            console.log(itr.data);
            itr = itr.next;
        } while (itr !== this.head);
    }

    render(){
    const container = document.getElementById("dequeContainer");
    container.innerHTML = ""; // Clear the container before rendering

    if (!this.head) {
        console.log("Queue is empty.");
        return;
    }

    let current = this.head;

    // Traverse the circular doubly linked list
    do {
        const nodeEle = document.createElement("div");
        nodeEle.classList.add("node");
        nodeEle.textContent = current.data;
        container.appendChild(nodeEle);

        current = current.next;
    } while (current !== this.head);
    }
}


const deque = new doubleEndedQueue();

document.getElementById("enqueueFront").addEventListener("click", () => {
    const value = prompt("Enter a value to enqueue at the front:");
    if (value) deque.enqueStart(value);
});

document.getElementById("enqueueRear").addEventListener("click", () => {
    const value = prompt("Enter a value to enqueue at the rear:");
    if (value) deque.enqueEnd(value);
});

document.getElementById("dequeueFront").addEventListener("click", () => {
    deque.dequeueStart();
});

document.getElementById("dequeueRear").addEventListener("click", () => {
    deque.dequeueEnd();
});