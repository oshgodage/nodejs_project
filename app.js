const sayHello=require('./greeting')
const message = sayHello('Developers')
const loadsh =require('lodash')
const number= [1, 2, 3, 4]
const reversed =loadsh.reverse(number)

console.log(reversed);
console.log(message)