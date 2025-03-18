function getUserPassword(probCorrectPass) {
  //example what should be done in the HW solution
  const passwords = ['correct', 'wrong'];
  const index =  Math.random() < probCorrectPass ? 0 : 1
  return new Promise(resolve => {
    setTimeout(() => resolve(passwords[index]), 1000);
  })
}

function login(password) {
  return new Promise((resolve) => {
    if (password === "correct") {
      setTimeout(() => resolve(password), 2000);
    }
    else throw "Password incorrect";
  });

  //returns promise in the state resolved only for passowrd 'correct' otherwise state rejected
}
function getUserData(username) {
  const users = {
  'Vasya': {name: "Vasya", age: 30},
  'Petya': {name: "Petya", age: 40}
  }   
      return new Promise((resolve) => {
      if (users[username]) {
          setTimeout(() => resolve(console.log(`User ${users[username].name} exists. User's age - ${users[username].age}`)), 1000);
      }
      else throw `User ${username} doesn't exists`;
  })
  //returns promise in the state resolved if username exists with returning user data
  //otherwise state rejected with apropriate message

  }
function funStackExample(username) {
  getUserPassword(0.8)
  .then((e) => login(e))
  .then(() => getUserData(username))
  .catch((err) => console.log(err))
  //runs the same functionality as commented out above but with calling of asynchronous functions
}

funStackExample('Vasya')
