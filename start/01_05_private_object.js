// Write your code here
const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'username',
  [password]: 'password',
  age: 27
};

console.log(user.username, user.password);