// Prototypes - Objects inherit from other objects.
// If an object doesn't exist on the current object, it then further looks at for said feature in its inherited object.
// ^ Prototype chain
let person = {
  hungry: true,
  getFood() {
    console.log("In the kitchen cooking stir-fry!");
  },
  getDrink() {
    console.log("...replenishing H20!...");
  },
};

// ALT to above (11-13)
// Obj.create makes a new obj, using an existing obj as a prototype.

// The standard way to access a prototype is via: Object.getPrototypeOf()
// When trying to access the property of an object, IF it's not found in the obj, prototype gets searched next.
// This search continues until the property is found OR the end of the chain is reached-- we know this by a returned null.
const child = Object.assign(Object.create(person), {
  maxAge: 19,
});

// console.log(person);
// console.log(Object.getPrototypeOf(person));
// console.log(child.hungry);

let myDate = new Date();

// console.log(myDate);
// do {
//   myDate = Object.getPrototypeOf(myDate);
//   console.log(object);
// } while (myDate);
//myDate -> __proto__ -> Date.Prototype -> __proto__ -> Object { ... } -> __proto__ -> null

// "shadowing" the property
// The method is first looked for inside the object, if it isn't found it goes to the prototype...
// In this instance, method was found inside the object.
myDate = new Date(2000, 04, 20);
console.log(myDate.getMonth()); // 04

myDate.getMonth = () => {
  console.log("first is last and last shall become first.");
};

myDate.getMonth(); // first is...

// Setting a prototype..
const barazal = Object.create(person);
// barazal.getFood();

function Person(name) {
  this.name = name;
}

const Friendly = {
  greet() {
    console.log(`Howdy ${this.name}`);
  },
};

Object.assign(Person.prototype, Friendly);
console.log(Person);
