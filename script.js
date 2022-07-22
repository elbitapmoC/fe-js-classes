// Prototypes - Objects inherit from other objects.
// If an object doesn't exist on the current object, it then further looks at for said feature in its inherited object.
// ^ Prototype chain
const person = {
  hungry: true,
};

// ALT to above (11-13)
const child = Object.assign(Object.create(person), {
  maxAge: 19,
});

console.log(person);
console.log(child.hungry);
