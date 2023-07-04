class Stack {
    constructor () {
        this.arr = []
    }

    push(item) {
        this.arr.push(item)
    }

    pop() {
        if (this.arr.length > 0) {
            this.arr.pop(this.arr.length - 1 , 1)
        } else {
            console.log("Stack is currently empty")
        }
    }

    check() {
        return this.arr
    }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
console.log(stack.check())
stack.pop()
console.log(stack.check())
stack.pop()
console.log(stack.check())
stack.pop()
