const price = [10, 32, 41, 37, 92, 25, 47];

//* add element to the end of an array using pop method
price.push(100)

//* add element to the start of an array using unshift method
price.unshift(999)

//* remove element to the start of an array using shift method
price.shift()

//* remove element to the end of an array using pop method
const lastElement = price.pop()
console.log(lastElement, price) 