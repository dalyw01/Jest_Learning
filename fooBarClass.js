function bar() {
    return "bar";
}

function foo() {
    return `I am foo. bar is ${myModule.bar()}`;  // Change `bar()` to `myModule.bar()`
}

const myModule = { bar, foo }; // Items you wish to export

module.exports = myModule; // Export the object

