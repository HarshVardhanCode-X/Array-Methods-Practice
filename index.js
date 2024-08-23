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

// 6-Check if any user is under 25:
const hasUserUnder25 = users.some(user => user.age < 25);
console.log(hasUserUnder25);

// 7-Check if all users have a balance over 2000:
const allUsersHaveBalanceOver2000 = users.every(user => user.balance > 2000);
console.log(allUsersHaveBalanceOver2000);

// 8-Get a list of user names:
const userNames = users.map(user => user.name);
console.log(userNames);

// 9-Count users with a balance of at least 5000:
const usersWithHighBalance = users.filter(user => user.balance >= 5000);
const count = usersWithHighBalance.length;
console.log(count);

// 10-Remove a user by ID (3):
const updateUsers = users.filter(user => user.id !== 3);
console.log(updateUsers);
