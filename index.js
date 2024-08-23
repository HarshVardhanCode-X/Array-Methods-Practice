const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
    { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
    { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
  ];

// 1-Find all active users:
const activeUsers = users.filter(user => user.isActive); //filter iterates over each element in the array, applying a function to each element.takes an object (user) and returns the value of its isActive property.
console.log(activeUsers);
  
// 2-Get the total balance of all users:
const totalBalance = users.reduce((accumulator, user) => accumulator + user.balance, 0); //Reduce- It takes two arguments: a callback function and an initial value (here 0).
console.log(totalBalance);

// 3-Find a user by email ("charlie@example.com"):
const lost = users.find(user => user.email === "charlie@example.com");
console.log(lost);

// 4-Sort users by age:
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);

// 5-Increase each user's balance by 10%:
const updatedUsers = users.map(user => ({...user , balance: user.balance * 1.10}));
console.log(updatedUsers);
  