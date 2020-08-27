const {
    listNode,
    linkedList
} = require('../lib/linkedlist')

describe("linked list", function () {
    it("shall create a linked between two nodes", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node1.next = node2
        expect(typeof (node1)).toBe('object');
        expect(node1.next).toBe(node2)
        expect(node2.next).toBe(null)
        done()
    })
    it("shall create a linkedList", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node1.next = node2
        list = new linkedList(node1)
        expect(list.head).toBe(node1)
        expect(list.head.next.value).toBe(5)
        done()
    })
    it("shall return size of linkedList", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node1.next = node2
        list = new linkedList(node1)
        expect(list.size()).toBe(2)
        listnull = new linkedList()
        expect(listnull.size()).toBe(0)

        done()
    })
    it("shall clear the linkedList", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node1.next = node2
        list = new linkedList(node1)
        expect(list.size()).toBe(2)
        list.clear()
        expect(list.size()).toBe(0)

        done()
    })
    it("shall return first and last element of the linkedlist", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node3 = new listNode(10)

        node1.next = node2
        node2.next = node3

        list = new linkedList(node1)
        expect(list.size()).toBe(3)
        const last=list.getLast()
        expect(last.value).toBe(10)
        expect(last.next).toBe(null)
        const first=list.getFirst()
        expect(first.value).toBe(2)
        expect(first.next).toBe(node2)

        done()
    })
    it("shall create a linkedList from an Array", done => {
        list = new linkedList([1, 2, 3])
        expect(list.size()).toBe(3)
        expect(list.getLast().value).toBe(3)

        list1= new linkedList([])
        expect(list1.size()).toBe(0)

        list2= new linkedList()
        expect(list2.size()).toBe(0)

        done()
    })
    it("shall add a node at the end of the linkedList", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node3 = new listNode(10)

        node1.next = node2
        node2.next = node3

        list = new linkedList(node1)

        list.push(100)
        expect(list.size()).toBe(4)
        const last=list.getLast()
        expect(last.value).toBe(100)
        expect(last.next).toBe(null)
        done()
    })
    /*
    createLinkedListFromArray
    print
    getIndex
    unshift
    shift
    pop
    push
    insertAtIndex
    */
})