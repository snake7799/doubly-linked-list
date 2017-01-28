const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node(); 

    }

    append(data) {
        let newNode = new Node(data);

        if (this.isEmpty())
            this._head = this._tail = newNode;
        else {
            newNode.prev = this._tail;
            this._tail.next = this._tail = newNode;
        }

        this.length++;

        return this;
    }

    head() {
        if (this._head != null)
            return this._head.data;
        else
            return null;
    }

    tail() {
        if (this._head != null)
            return this._tail.data;
        else 
            return null;
    }

    at(index) {
        if (index >= 0 && index < this.length) {
            let needNode = this._head;

            for (let i = 0; i < index; i++)
                needNode = needNode.next;

            return needNode.data;
        }
        else
            return -1;
    }

    insertAt(index, data) { 
        if (index >= 0 && index < this.length) {
            let newNode = new Node(data),
                tempNode = new Node();

            tempNode.next = this._head;

            for (let i = 0; i < index; i++)
                tempNode = tempNode.next;

            newNode.next = tempNode.next = newNode;

            this.length++;

            return this;
        }
        else
            return -1;
    }

    isEmpty() {
        if (this.length == 0)
            return true;
        else
            return false;
    }

    clear() {
        this._head = this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index >= 0 && index < this.length) {
            let needNode = this._head;

            if (index == 0) {
                this._head = needNode.next;

                if (this._head)
                    this._head.prev = null;
                else
                    this._tail = null;
            } 
            else if (index == this.length - 1) {
                needNode = this._tail;
                this._tail = needNode.prev;
                this._tail.next = null;
            } 
            else {                               
                for (let i = 0; i < index; i++)
                    needNode = needNode.next;

                needNode.prev.next = needNode.next;
            }

            this.length--; 

            return this;
        } 
        else 
            return -1;
    }

    reverse() { 
        let node = new Node(),
            temp = new Node(); 

        this._tail = node = this._head;

        while (node) {
            temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev;
        }

        if (temp)
            this._head = temp.prev;

        return this;
    }

    indexOf(data) {
        let searchNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (searchNode.data == data)
                return i;
            else if (i == this.length - 1)
                return -1;

            searchNode = searchNode.next;
        }
    }
}

module.exports = LinkedList;