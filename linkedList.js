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

    get tail() {
        let node = this.head;
        if (!node) return;

        while (node.next)
            node = node.next;
        return node;
    }

    at(index) {
        let node = this.head;
        for (let i = 0; i < index; i++)
            node = node.next;
        return node;
    }

    pop() {
        if (!this.head)
            return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prevNode = this.head;
        let node = prevNode.next;
        while (node && node.next) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if (node.value === value)
                return true;
            node = node.next;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let index = 0;
        while(node) {
            if (node.value === value)
                return index;
            index++;
            node = node.next;
        }
        return 'not found';
    }

    insertAt(value, index) {
        let node = this.head;

        if (!node)
            return;
        if (index == 0) {
            this.head = new Node(value);
            this.head.next = node;
            return;
        }

        let size = this.size;
        if (index >= size - 1) {
            this.append(value);
            return;
        }

        let prevNode = node;
        for (let i = 0; i < index; i++) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = new Node(value);
        prevNode.next.next = node;
    }

    removeAt(index) {
        if (index == 0) {
            this.head = this.head.next;
            return;
        }
        if (index >= this.size)
            return;

        let node = this.head;
        let prevNode = node;
        for (let i = 0; i < index; i++) {
            prevNode = node;
            node = node.next;
        }
        prevNode.next = node.next;
    }

    toString() {
        let node = this.head;
        if (!this.head)
            return 'empty';
        let string = '( ' + node.value + ' )';

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

console.log('list toString(): ', list.toString());
console.log('list size: ', list.size);

console.log('head: ', list.head);
console.log('tail: ', list.tail);
console.log('at index 0: ', list.at(0));
console.log('at index 1: ', list.at(1));
console.log('at index 2: ', list.at(2));
console.log('at index 3: ', list.at(3));

console.log('contains 8?: ', list.contains(8));
console.log('finding 6 at index: : ', list.find(6));

console.log('inserting 5 at index 2...');
list.insertAt(5, 2);
console.log('list toString(): ', list.toString());
console.log('removing at index 2...');
list.removeAt(2);
console.log('list toString(): ', list.toString());

console.log('popping...');
list.pop();
console.log('list toString(): ', list.toString());
console.log('popping...');
list.pop();
console.log('list toString(): ', list.toString());
console.log('popping...');
list.pop();
console.log('list toString(): ', list.toString());
console.log('popping...');
list.pop();
console.log('list toString(): ', list.toString());



