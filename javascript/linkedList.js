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