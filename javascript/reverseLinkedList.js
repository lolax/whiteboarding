const reverseLinkedList = node => {
    let curr = node
    let prev = null
    let next = null
    
    while (curr) {
        next = curr.next
        curr.next = prev
        
        curr = next
        prev = curr
    }
    return prev.value
}

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Function that prints the contents of a linked list */
function printList(node) {
  let current = node;
  
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

console.log(reverseLinkedList(a));  // should print 'e'
printList(e); // should print 'e', 'd', 'c', 'b', 'a'