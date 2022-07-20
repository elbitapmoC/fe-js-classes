// class User {
//   constructor(email, name, status) {
//     this.email = email;
//     this.name = name;
//     this.status = status;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.email} just logged IN.`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.email} just logged OUT.`);
//     return this;
//   }
//   updateScore() {
//     this.score++;
//     console.log(`${this.name}, here's your updated score: ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((u) => {
//       console.log(u);
//       // user will now contain ONLY the emails that do NOT match what's passed in.
//       return u.email != user.email;
//     });
//   }
// }

// // Stores array of users.
// let users = [];
// let userA = new User("Fuji@ninja.com", "Fujibayashi Nagato", true);
// let userB = new User("Ishi@ninja.com", "Ishikawa Goemon", true);
// let userC = new User("Hanzo@ninja.com", "Hattori Hanzo", true);

// users.push(userA, userB, userC);

// // 'new' keyword
// // 1- creates an empty object {}
// // 2- sets the value of this to the empty object.
// // 3- calls the constructor method.

// // Chaining methods.
// // userA.login().updateScore().logout();

// let adminA = new Admin("Ace@ninja.com", "Luffy's Brother", true);
// adminA.deleteUser(userC);
// console.log(users);

function Proto() {
  this.name = "Proto";
  return this;
}

Proto.prototype.getName = function () {
  return this.name;
};

class MyClass extends Proto {
  constructor() {
    super();
    this.name = "MyClass";
  }
}

const instance = new MyClass();
console.log(instance.getName());
Proto.prototype.getName = function () {
  return "Overridden in Proto";
};
console.log(instance.getName());

MyClass.prototype.getName = function () {
  return "Overridden in MyClass";
};

console.log(instance.getName());

instance.getName = function () {
  return "Overridden in instance";
};

console.log(instance.getName());
