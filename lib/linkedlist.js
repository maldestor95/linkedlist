class listNode {
    constructor(data) {
        this.value = data
        this.next = null
    }
}

class linkedList {
    constructor(head = null) {
        if (Array.isArray(head)) {
            const startData = head.shift()
            this.head = startData ? new listNode(startData) : null
            let nextData = head.shift()
            while (nextData != null) {
                this.push(nextData)
                nextData = head.shift()
            }
        } else {
            this.head = head
        }
    }
    size() {
        let count = 0
        let node = this.head
        while (node != null) {
            count++
            node = node.next
        }
        return count
    }
    clear() {
        this.head = null
    }
    getFirst() {
        return this.head
    }
    getLast() {
        if (this.size() == 0) return null
        let lastNode = this.head
        while (lastNode.next != null) {
            lastNode = lastNode.next
        }
        return lastNode
    }
    print() {
        return JSON.stringify(this.head)
    }
    push(data) {
        let lastdata = this.getLast()
        lastdata.next = new listNode(data)
    }
    shift() {
        if (this.head == null) return null
        const first = this.head.value
        this.head = this.head.next
        return first
    }
    unshift(data) {
        let node = new listNode(data)
        node.next = this.head
        this.head = node
    }
    pop() {
        if (this.head == null) return null
        let current = this.head
        let next = current.next
        while (next.next != null) {
            current = next
            next = next.next
        }
        current.next = null
        return next.value

    }
    getIndex(position) {
        if (position < 0 || position > this.size()) return null
        let current = this.head
        for (let index = 0; index < position; index++) {
            current = current.next
        }
        return current.value
    }
    insertAtIndex(value, position) {
        if (position < 0 || position > this.size()) return 'cannot access position while inserting'
        let current = this.head
        for (let index = 1; index < position; index++) {
            current = current.next
        }
        let nodeToInsert = new listNode(value)
        nodeToInsert.next = current.next
        current.next = nodeToInsert
        return null
    }

}

module.exports = {
    linkedList,
    listNode
}