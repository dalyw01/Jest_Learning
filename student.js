const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    },

    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log('Hello world!?');

console.log(student.firstName); // Monica - Accessing data property
console.log(student.getName);   // Monica - Accessing getter methods
student.changeName = 'Sarah';   // Setting value to 'Sarah'
console.log(student.firstName); // Sarah