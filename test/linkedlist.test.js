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
        const last = list.getLast()
        expect(last.value).toBe(10)
        expect(last.next).toBe(null)
        const first = list.getFirst()
        expect(first.value).toBe(2)
        expect(first.next).toBe(node2)

        done()
    })
    it("shall create a linkedList from an Array", done => {
        list = new linkedList([1, 2, 3])
        expect(list.size()).toBe(3)
        expect(list.getLast().value).toBe(3)

        list1 = new linkedList([])
        expect(list1.size()).toBe(0)

        list2 = new linkedList()
        expect(list2.size()).toBe(0)

        done()
    })
    it("shall print the linkedlist", done => {
        const list = new linkedList([1, 2])
        expect(list.print()).toBe(
            JSON.stringify({
                value: 1,
                next: {
                    value: 2,
                    next: null
                }
            })
        )
        done()
    })
    it("shall add a node at the end of the linkedList (push)", done => {
        node1 = new listNode(2)
        node2 = new listNode(5)
        node3 = new listNode(10)

        node1.next = node2
        node2.next = node3

        list = new linkedList(node1)

        list.push(100)
        expect(list.size()).toBe(4)
        const last = list.getLast()
        expect(last.value).toBe(100)
        expect(last.next).toBe(null)
        done()
    })
    it("shall add a node at the beginning of the linkedList (unshift)", done => {

        list = new linkedList([1, 2, 3])
        list.unshift(0)

        expect(list.size()).toBe(4)
        const first = list.getFirst()
        expect(first.value).toBe(0)
        expect(first.next.value).toBe(1)
        expect(first.next).toEqual({
            "value": 1,
            "next": {
                "value": 2,
                "next": {
                    "value": 3,
                    "next": null
                }
            }
        })

        list2 = new linkedList()
        list2.unshift(1)
        expect(list2.size()).toBe(1)
        expect(list2.getLast().value).toBe(1)
        done()
    })
    it("shall remove a node at the beginning of the linkedList (shift)", done => {

        list = new linkedList([1, 2, 3])
        list.shift()
        expect(list.size()).toBe(2)
        const first = list.getFirst()
        expect(first.value).toBe(2)
        expect(first).toEqual({
            "value": 2,
            "next": {
                "value": 3,
                "next": null
            }
        })

        list2 = new linkedList()
        list2.shift()
        expect(list2.size()).toBe(0)
        expect(list2.getLast()).toBe(null)
        expect(list2.getFirst()).toBe(null)
        done()
    })
    it("shall remove a node at the end of the linkedList (pop)", done => {

        list = new linkedList([1, 2, 3])
        const ll = list.pop()
        expect(ll).toBe(3)
        expect(list.size()).toBe(2)
        const last = list.getLast()
        expect(last.value).toBe(2)
        expect(list.print()).toEqual(JSON.stringify({
            "value": 1,
            "next": {
                "value": 2,
                "next": null
            }
        }))

        list2 = new linkedList()
        list2.pop()
        expect(list2.size()).toBe(0)
        expect(list2.getLast()).toBe(null)
        expect(list2.getFirst()).toBe(null)
        done()
    })
    it("shall return the data from a specific index (getIndex)", done => {
        list = new linkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(list.getIndex(-1)).toBe(null)
        expect(list.getIndex(11)).toBe(null)
        expect(list.getIndex(0)).toBe(1)
        expect(list.getIndex(5)).toBe(6)

        list2 = new linkedList()
        expect(list2.getIndex(-1)).toBe(null)
        expect(list2.getIndex(11)).toBe(null)

        done()
    })
    it("shall insert node at index j of the linkedlist (insertAtIndex)", done => {
        list = new linkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        list.insertAtIndex(4444, 4)
        expect(list.size()).toBe(11)
        expect(list.getIndex(3)).toBe(4)
        expect(list.getIndex(4)).toEqual(4444)
        expect(list.getIndex(5)).toBe(5)

        let res = list.insertAtIndex(111, -5)
        expect(list.size()).toBe(11)
        expect(res).toBe('cannot access position while inserting')

        list.insertAtIndex(111, 100)
        expect(list.size()).toBe(11)
        expect(res).toBe('cannot access position while inserting')

        done()
    })
    it("shall remove node at index j of the linkedlist (insertAtIndex)", done => {
        list = new linkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        let res = list.removeAtIndex(-5)
        expect(list.size()).toBe(10)
        expect(res).toBe('cannot access position while inserting')

        list.removeAtIndex(100)
        expect(list.size()).toBe(10)
        expect(res).toBe('cannot access position while inserting')

        list.removeAtIndex(4)
        expect(list.size()).toBe(9)
        expect(list.getIndex(3)).toBe(4)
        expect(list.getIndex(4)).toEqual(6)
        expect(list.getIndex(5)).toBe(7)

        list= new linkedList([1, 2, 3])
        list.removeAtIndex(2)
        expect(list.size()).toBe(2)
        // console.log(list.print())

        done()
    })

})