class LinkedList {
  constructor() {
    this.list = null;
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value, null);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
    }
    this.size++;
  }

  getHead() {
    if (this.head !== null) {
      console.log(`Head: ${this.head.value}`);
    } else {
      console.log('Head: null');
    }
  }

  getTail() {
    if (this.tail !== null) {
      console.log(`Tail: ${this.tail.value}`);
    } else {
      console.log('Tail: null');
    }
  }

  getSize() {
    console.log(`Size: ${this.size}`);
  }

  getList() {
    console.log(JSON.stringify(this.head, null, 2));
  }

  toString() {
    let string = 'To string: ';
    let node = this.head;
    while (node !== null) {
      string = string.concat(`(${node.value}) -> `);
      node = node.next;
    }
    string = string.concat('(null)');
    console.log(string);
  }

  at(index) {
    if (index >= this.size) {
      console.log("Index doesn't exist");
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    console.log(`Node at ${index}:${JSON.stringify(currentNode, null, 1)}`);
  }

  pop() {
    let node = this.head;
    while (node.next !== this.tail) {
      node = node.next;
    }
    node.next = null;
    this.tail = node;
    this.size--;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        console.log('Contains: true');
        return true;
      }
      currentNode = currentNode.next;
    }
    console.log('Contains: false');
    return false;
  }

  find(value) {
    let node = this.head;
    let counter = 0;
    while (node !== null) {
      if (node.value === value) {
        console.log(`Index of ${value}: ${counter}`);
        return counter;
      }
      counter++;
      node = node.next;
    }
    console.log("Find: Number doesn't exist.");
    return null;
  }

  insertAt(value, index) {
    if (index > this.size) {
      console.log("Index doesn't exist.");
      return null;
    }

    if (index === 0) {
      this.prepend(value);
      return true;
    } else if (index === this.size) {
      this.append(value);
      return true;
    }

    let currentNode = this.head;
    let counter = 0;

    while (counter + 1 !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    const node = new Node(value, currentNode.next);
    currentNode.next = node;
    this.size++;
    return true;
  }

  removeAt(index) {
    if (index >= this.size) {
      console.log("Remove: Index doesn't exist.");
      return null;
    }

    let currentNode = this.head;
    let counter = 0;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return true;
    } else if (index === this.size) {
      while (counter !== this.size - 2) {
        currentNode = currentNode.next;
        counter++;
      }
      currentNode.next = null;
      this.tail = currentNode;
      this.size--;
      return true;
    }

    currentNode = this.head;
    counter = 0;

    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    currentNode.next = currentNode.next.next;
    this.size--;
    return true;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.prepend(0);
list.prepend(12);
list.pop();
list.insertAt(50, 5);
list.removeAt(6);

list.getSize();
list.getHead();
list.getTail();

list.toString();
list.at(5);
list.contains(40);
list.find(40);
list.getList();
