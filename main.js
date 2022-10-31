//Q1 --------------------------------
// Write a function that takes a number as input and returns true
// if the number is less than or equal to zero, otherwise return false.
// function test(x) {
//   if (x <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(test(5));
// console.log(test(-1));

//Q2 --------------------------------
// Print the Next integer from the input
// number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)
// let number = prompt("Enter number");

// console.log(++number);

//Q3 --------------------------------
// Write a function that takes an array of strings and
// returns only the strings with numbers in it as an array.
// And return an empty array,
//  If there are no strings containing numbers.

// function numInStr(arr) {
//   return arr.filter(function (e) {
//     return e.match(/\d/);
//   });
// }

// console.log(numInStr(["welcome", "ra12", "34norman", "ayla"]));

//Q4 --------------------------------
// Develop a JS Code to check if a number is even or odd using recursion
// const is_Even = (num) => num % 2 === 0;
// const is_Odd = (num) => num % 2 === 1;
// console.log(" even number!");
// console.log(is_Even(1));
// console.log(is_Even(2));
// console.log(is_Even(400));
// console.log(" odd number!");
// console.log(is_Odd(1));
// console.log(is_Odd(6));
// console.log(is_Odd(707));

//Q5 --------------------------------

// Write a function to swap all instances of string ch1 with
//  string ch2 and vice versa (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function swapChar(str1, ch1, ch2) {
  str = str1.split("");
  let result = str.map((e) => {
    if (e == ch1) {
      return (e = ch2);
    } else if (e == ch2) {
      return (e = ch1);
    } else {
      return e;
    }
  });
  return result.join("");
}

// console.log(swapChar('aaddeeee', 'a', 'd'));

//Q6 --------------------------------
// Return all the names in this array
array = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Q7 --------------------------------
// Return all the names in this array using foreach
// array.forEach((nameValuee) => console.log(nameValuee));
array.forEach((e) => console.log(e));

//Q8 --------------------------------
function idandTitle(arr) {
  newArr = [];
  arr.forEach((series) => {
    ser = { id: series.id, title: series.title };
    newArr.push(ser);
  });
  return newArr;
}
const series = () => {
  let newSeries = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
};

// console.log(idandTitle(newSeries));

//Q9 --------------------------------
// Return all the names in this array using map
// const mapedSeries = newSeries.map((value) => {
//     return {
//         "id": value.id,
//         "title": value.title,
//     }
// });

// console.log(mapedSeries);

//Q10 --------------------------------

// const filteredSeries = newSeries.filter((value) => {
//   return value.rating < 5;
// });
// // console.log(filteredSeries);

// series();

//Q11 --------------------------------
let lang = ["Java", "JavaScript", "Python", "C++", "PHP"];

lang.reduce((acc, value) => {
  if (acc > value.length) {
    console.log(acc);
  } else {
    acc = value.length;
  }
}, 0);

//Q12 --------------------------------

let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];

function Names(pokemonData) {
  let names = pokemonData.reduce(function (a, b) {
    a.push(b.version.name);
    return a;
  }, []);

  // console.log(pokemonData[0].version.name);

  return names;
}

console.log(Names(pokemonData));
// Q13 -------------------------------
//  Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.

const emailArr = [
  {
    name: "ude.Top",
    email: "Taya.Kerluke53@gmail.com",
    add: {
      street: " Felds",
      suie: "Ste 231",
      city: "Tinamuth",
      zcode: "07584-6653",
      geo: { lat: "75.023", lng: "-17.1824" },
    },
    phone: "795-827-5446 x18366",
    website: "nico.com",
    company: {
      name: "Champlin, Barrows and me",
      catchPhrase: "Object user-facing orchestration",
      bs: " integrated content",
    },
    firstN: "Mida",
    lastN: "Feey",
  },
];

function searchEmail(array) {
  array.forEach((element) => {
    for (const key in element) {
      console.log(`${key}: ${element[key]}`);
      `${key}` == "email" ? console.log(element[key]) : null;
    }
  });
}

searchEmail(emailArr);
