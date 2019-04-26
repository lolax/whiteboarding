class ListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.prev = null;
a.next = b;

b.prev = a;
b.next = c;

c.prev = b;
c.next = d;

d.prev = c
d.next = e;

e.prev = d;
e.next = null;