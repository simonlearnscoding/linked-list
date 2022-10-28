const Module = (function(){
    function linkedList() {
        const obj = Object.create(proto)
        obj.list = []
        return obj
    }
    const functions = {

        modulate: {

            append(value) {
                const list =  this.list
                const item = nodeCreator(value)
                //will add a new node containing value to the end of the list
                list.push(item)
                //if there is a node before that
                if (list.length > 1) {
                    list[list.length - 2].nextNode = item
                    }
    },
            prepend(value) {

                const list = this.list
                const item = nodeCreator(value, list[0])
                //will add a new node containing value to the start of the list
                list.unshift(item)
    },
            pop() {
                const tail = this.tail()
                recursion(tail)
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

                // this.list.push(nodeCreator(value, pointer))
                // this.list.
                // this.list.unshift(index, nodeCreator(value, this.list[index+1]))
                },
        },
        printThings: {
            getNode(index) {
                const tail = this.tail()
                return getIndexNode(tail, index)

                function getIndexNode(current, index, counter=0)
                    {
                        if(counter===index) {
                            return current
                        }
                        else {
                            next = current.nextNode
                            counter++
                            return getIndexNode(next, index, counter)
                        }
                    }
            },
            size() {
                const tail = this.tail()
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
            head() {
        //will return the FIRST node in the list
                let pointer = this.list[0]
                while(pointer.nextNode !== null) {
                    pointer = pointer.nextNode
                }
                return pointer
    },
            tail() {
        // will return the last node in the list
                let counter = 7
                let pointer = this.head()
                return getPrevious(pointer, this.list)

                function getPrevious(current, list)
                        {
                            const previous = list.filter(node => node.nextNode === current)[0]
                            if(!previous) {
                                return current
                            }
                            else
                            {
                                return getPrevious(previous, list)
                            }

                    }

    },
            at(index) {
                const current = this.tail()
                getNode(current, index)
                function getNode(current, index, counter=0) {
                    if (index==counter) {
                        return current
                    }
                    else {
                        const next = current.nextNode
                        counter++
                        return getNode(next, index, counter)
                    }
                }
              //returns the node at the given index
               return this.list[index]

    },
            find(value) {
                const current = this.tail()
                return find(current, value)
                function find(current, value) {
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
            },
            toString() {
        //represents your linkedList objects as strings
        //sou you can print them out and preview them in the console
        // the format should be
        // ( value ) -> ( value ) -> ( value ) -> null
        const tail = this.tail()

        return stringFunction(tail)

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


class linkedList {
    constructor() {
        this.list = []
    }


    static removeAt(index) {
        //removes the node at index=index
    }
    }



const list = Module()
list.append(100)
list.append(300)
list.append(400)
list.pop()
// list.insertAt(500, 2)
console.log(list.head())
console.log(list.tail())
console.log(list.toString())
console.log(list.size())
console.log(list.at(1))
console.log(list.find(100))

