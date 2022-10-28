const Module = (function(){
    function linkedList(node) {
        const obj = Object.create(proto)
        obj.head = null
        return obj
    }
    const functions = {
        modulate: {
            prepend(value) {
                // Append node at the
                const node = nodeCreator(value)
                node.nextNode = this.head
                this.head = node
    },
            append(value) {
                const node= nodeCreator(value)
                const tail = this.tail()
                if(!tail) {this.head=node}
                else {
                    tail.nextNode = node
                    node.nextNode = null
                }

                //will add a new node containing value to the start of the list
    },
            pop() {
                const head = this.getHead()
                recursion(head)
                function recursion(current) {
                    const next = current.nextNode
                    if (!next.nextNode) {
                        current.nextNode = null
                    }
                    else {
                        recursion(next)
                    }
                }
    },
            insertAt(value, index) {
                // inserts new node with value = value at index

                //select first item
                const head = this.getHead()
                let counter = 0
                let node = this.getNode(head, index-1)

                const newNode = nodeCreator(value)
                newNode.nextNode = node.nextNode
                node.nextNode = newNode

                },
            removeAt(index){
                const head = this.getHead()
                const targetDad = this.getNode(head, index-1)
                const target = targetDad.nextNode
                targetDad.nextNode = target.nextNode
            },
        },
        printThings: {

            size() {
                const tail = this.getHead()
                return getNumber(tail)

                function getNumber(current, count=0) {
                    count ++
                    const next = current.nextNode
                    if(!next) {
                        return count
                    }
                    else {
                        return getNumber(next, count)
                    }}
                //will return the total number of nodes in the list
    },
            getHead() {
                //will return the FIRST node in the list
                return this.head
    },
        getNode(current, index, counter=0) {
        if(index===counter) {
            return current
        }
        counter++
        const next = current.nextNode
        return this.getNode(next, index, counter)
    },
            tail() {
                // will return the last node in the list
                let pointer = this.getHead()
                return getTail(pointer)

                function getTail(current)
                        {
                            if(current === null) {return current}
                            if(!current.nextNode)
                                {
                                    return current
                                }
                            else
                            {
                                return getTail(current.nextNode)
                            }

                    }

    },
            at(index) {
                //returns the node at the given index
                const current = this.getHead()
                return getNode(current, index)
                function getNode(current, index, counter=0) {
                    if(!current) { throw new Error(`There is no node at position ${index}, in fact there are only ${counter} nodes in this list`)}
                    if (index==counter) {
                        return current
                    }
                    else {
                        const next = current.nextNode
                        counter++
                        return getNode(next, index, counter)
                    }
                }

    },
            find(value) {
                const current = this.getHead()
                return find(current, value)
                function find(current, value) {
                    if(!current) {
                        return null
                    }
                    if(current.value === value) {
                        return current
                    }
                    else {
                        const next = current.nextNode
                        return find(next, value)
                    }
                }
                // redurns the index of the node containing value
                const result = this.list.filter(item => item.value === value)[0]
                if(result!== undefined) {
                    return result
                }
                throw new Error('no Node item with this value in list!')
                // or null if not found
            }, //TODO rework this one
            contains(value) {
                const current = this.getHead()
                return find(current, value)
                function find(current, value) {
                    if(!current) {
                        return false
                    }
                    if(current.value === value) {
                        return true
                        }
                    else {
                        const next = current.nextNode
                        return find(next, value)
                    }
                }
                // redurns the index of the node containing value
                const result = this.list.filter(item => item.value === value)[0]
                if(result!== undefined) {
                    return result
                }
                throw new Error('no Node item with this value in list!')
                // or null if not found
            },
            toString() {
                //represents your linkedList objects as strings
                //sou you can print them out and preview them in the console
                // the format should be
                // ( value ) -> ( value ) -> ( value ) -> null
                const tail = this.tail()

        return stringFunction(this.getHead())

        function stringFunction(current, string='') {
            string += `( ${current.value} ) -> `
            const next = current.nextNode
            if (!next) {
                string +=' null'
                return string
            }
            else{
                return stringFunction(next, string)
            }
            }

    },

        }
    }
    const proto = createPrototype()

    function nodeCreator(value=null, nextNode=null) {
        const obj = {
            value,
            nextNode
        }
        return obj
    }
    function createPrototype() {
        const proto = {}
        for(const i of Object.values(functions)) {
            Object.assign(proto, i)
    }
        return proto
    }

    return linkedList
})()

const list = Module()
list.getHead()
list.prepend(100)
list.append(300)
list.append(400)
list.insertAt(24, 2)
list.append('end')
list.removeAt(1)
// list.pop()

// list.pop()
// list.insertAt(500, 2)
// console.log(list.head())
console.log(list.tail())
console.log(list.contains(300))

console.log(list.find(300))
console.log(list.contains('put'))
console.log(list.toString())
console.log(list.size())
// console.log(list.at(3))
// console.log(list.find(100))

