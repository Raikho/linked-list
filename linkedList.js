class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

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

    prepend(value) {
        let tempNext = this.head;
        this.head = new Node(value);
        this.head.next = tempNext;
    }

    get size() {
        let node = this.head;
        if (!node) return 0;
        let size = 1;
        while(node.next) {
            node = node.next;
            size++;
        }
        return size;
    }

    toString() {
        let node = this.head;
        if (!this.head)
            return 'empty';

        // First value
        let string = '( ' + node.value + ' )';

        // Subsequent values
        while(node.next) {
            node = node.next;
            string += ' -> ( ' + node.value + ' )'
        }

        return string;
    }
}

let list = new LinkedList;
list.append(4);
list.append(6);
list.append(8);
list.prepend(2);

console.log(list.toString());

console.log(list);
console.log(list.size);

