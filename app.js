const sayHello = require("./greeting");
const message = sayHello("Developers");
const loadsh = require("lodash");
const number = [1, 2, 3, 4];
const reversed = loadsh.reverse(number);

console.log(reversed);
console.log(message);

//
const EventEmitter = require("events");
const { error } = require("console");

const emitter = new EventEmitter();

// Registering a listener
emitter.on("test1", () => {
  console.log("An event has occured");
});
emitter.on("error", (err) => {
  console.log("Error event", err.message);
});
// emitter.emit('test1')

//Multiple listeners to same event

// emitter.on('test1', ()=>{
//     console.log('An event has occured in test1')
// })
// emitter.on('test1', ()=>{
//     console.log('An event has occured test2')
// })

try {
  emitter.emit("test1");
  emitter.removeListener("test1");
  emitter.emit("test1");
} catch (error) {}
emitter.emit('error',error)

//Remove Event listeners
//emitter.removeListener('test1')
