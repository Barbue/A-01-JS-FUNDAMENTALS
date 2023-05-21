
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function one (num1, num2) {

  let sum = num1 + num2 + x

 return sum

}

console.log(one(2,4))



// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const two = (num1, num2) => {

  let sum = num1 + num2 + x
 return sum


}

console.log(two(5,20))





// 3. Write a function that returns another function. (use arrow functions please)


const three = () => {

  const four = () => {
    let sum = 4 * 200

    return sum
}
return four()
}

console.log(three())






// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

//------The function still has access to variable "y" because it is a nested function which has access to the scope of the parent function which is getFunction. ---------


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("sorry, there was an error");
  }
  
  return 'success'
}
couldThrowError()


const callBack1 = (callback) => {
  return callback
}

console.log(callBack1(couldThrowError()))


////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const newArray = userData.map(element => {
    const newObjectsArr = {
    id: element.id,
    favoriteFoods: element.favorites.food.length

    }
return newObjectsArr

})

console.log(newArray)




// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

 const namesArr = userData.reduce((total, item, index) => {
       
  if( item.favorites.food[0] === 'pizza' || item.favorites.food[1] === 'pizza' || item.favorites.food[2] === 'pizza' )

     total.push(item.name)
    
      
      return total 
     
},[])

console.log(namesArr)


// 7. Show an an example of a switch statement being used

       let month
      switch (new Date().getMonth()) {
          case 0:
              month = 'January';
              break;
          case 1:
              month ='February';
              break;
          case 2:
              month = 'March';
              break;
          case 3:
              month = 'April';
              break;
          case 4:
              month = 'May';
              break;
          case 5:
              month = 'June';
              break;
          case 6:
              month = 'July';
              break;
          case 7:
              month = 'August';
              break;
          case 8:
              month = 'September';
              break;
          case 9:
              month = 'October';
              break;
          case 10:
              month = 'November';
              break;
          case 11:
              month = 'December';

          }
     console.log(month)









////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
 let user1
 const combineInfo = (userPersonalData, userGameData) => {
    user1 = {

    ...userPersonalData,
    ...userGameData

}
return user1
}

console.log(combineInfo(userPersonalData, userGameData))
console.log(user1)


// 9. Make a copy of your new user object but override the birthday to december 31st

const newCopy = (user1) => {
 return {
   ...user1,
   birthday: 'december 31st'



 }
}
console.log(newCopy(user1))


// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const copyAccomplishments = (user1) => {
    

const accps = [...user1.accomplishments]


return accps
}

 
 console.log(copyAccomplishments(user1))




//  11.Given the object below, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable named food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

let food = user.favoriteThings.food

console.log(food)
 
// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //


let [first, second] = food

console.log(first, second)


// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...food1] = data


console.log(name)
console.log(age)
console.log(food1)

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

const newObj = (userInfo) => {

return {

  userName: userInfo.name,
  favoriteFood: userInfo.favorites.needs.food,
  favoriteThing: userInfo.favorites.wants.things[0], 
  secondfavoriteThing: userInfo.favorites.wants.things[1]

}
}

console.log(newObj(userInfo))














// var fetchData = () => new Promise((resolve, reject) => {
//   console.log('fetchingData from imaginary database')
//   setTimeout(() => {
//        try {
//          // fetchingData from imaginary database
//          if((Math.ceil(Math.random() * 2)) < 2){
//            throw new Error('Error!')
//          }
//          resolve({name: 'john', age:42})
//         } catch(error) {
//           reject(error);
//         }
//   }, 5000);
// });


// module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
// var fetchData = () => new Promise((resolve, reject) => {
//   console.log('fetchingData from imaginary database')
//   setTimeout(() => {
//        try {
//          // fetchingData from imaginary database
//          if((Math.ceil(Math.random() * 2)) < 2){
//            throw new Error('Error!')
//          }
//          resolve({name: 'john', age:42})
//          .then(resolve => console.log(resolve))
//         } catch(error) {
//           reject(error);
//         }
//   }, 5000);
// });

// fetchData()

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
}).then(resolve => console.log(resolve))


fetchData()




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fetchData = async () =>  await new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
   setTimeout( () => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
}).then(resolve => console.log(resolve))


fetchData()