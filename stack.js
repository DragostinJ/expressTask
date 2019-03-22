// Declare stack
let stack = [];

// Declare module exports
module.exports = {
  //function cur - chechs for state of stack
  cur: () => {
    console.log(stack);
  },
  //function add - Pushes name to the stack
  add: name => {
    if (typeof name === "string") {
      stack.push(name);
    } else {
      throw new Error("You must enter a string");
    }
  },
  //function get - Gets and removes item from stack
  get: () => stack.pop()
};
