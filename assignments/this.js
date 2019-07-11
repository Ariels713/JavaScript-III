/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: .this points to the window object. 
* 2. Implicit Binding: A function followed by a .(dot) the object before the .(dot) is the .this.
* 3. New Binding: .this refers to the object created by the constructor function. (The object creator)
* 4. Explicit Binding: .this is explictly defined when the .call() or .apply() is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBinding(bindedToo) {
    console.log(this)
    return bindedToo

}
windowBinding(`I pointing at the window`)//?

// Principle 2

// code example for Implicit Binding
const cars = {
    carType: `Ford`,
    cylindars: 6,
    color: `red`,
    automatic: true,
    color: function(carColor){
        console.log(`This car is a ${this.carType}, and it's color is ${carColor}`);//?
        console.log(this)//?
    }

}
cars.color('red')//?

// Principle 3

// code example for New Binding

function States(cities) {
    this.state = `New York`;
    this.city = cities;
    this.location = function(){
        console.log(`${cities} ${this.state}`)//?//?
    }
}
const brooklyn = new States(`Brooklyn`);
const queens = new States(`Queens`);
const manhattan = new States(`New York`);//?
console.log(brooklyn.location())
// Principle 4

// code example for Explicit Binding

function introduction(hobby1, hobby2, hobby3) {
    return `hello, I'm ${this.name} and my hobbies are ${hobby1}, ${hobby2}, and the ${hobby3}.`
  }
  
  const person = {
    name: `Ariel`
  }
  const hobbys = ['programming', 'video games', 'ukulele']
  
  console.log(introduction.call(person, 'programming', 'video games', 'ukulele'))
  console.log(introduction.apply(person, hobbys))// accepts an array as the second argument
  console.log(introduction.call(person,...hobbys))// does what .apply() does
  
  const useMeLater = introduction.bind(person, ...hobbys);
  console.log(useMeLater())