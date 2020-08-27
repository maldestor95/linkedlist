class listNode {
    constructor(data) {
        this.value = data
        this.next = null
    }
}

class linkedList {
    constructor(head = null) {
        if (Array.isArray(head)){
            const startData= head.shift()
            this.head=startData?new listNode(startData):null
            let nextData=head.shift()
            while(nextData!=null){
                this.push(nextData)
                nextData=head.shift()
            }
        }
        else {
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
    getFirst(){
        return this.head
    }
    getLast(){
        let lastNode = this.head
        while (lastNode.next != null) {
            lastNode = lastNode.next
        }
        return lastNode
    }
    print(){
        console.log(JSON.stringify(this.head))
    }
    push(data){
        let lastdata=this.getLast()
        lastdata.next=new listNode(data)
    }

}

module.exports = {
    linkedList,
    listNode
}