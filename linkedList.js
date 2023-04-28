console.log('Hello, world!');

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        let node = this.head;
        while (node.next != null)
            node = node.next;
        node.next = new Node(value);
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

let list = new LinkedList;
list.append(20);
list.append(40);
list.append(60);
console.log(list);

