const HashMap = require("./practice");

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr);

  const maiar = lotr.get("Maiar");
  const hobbit = lotr.get("Hobbit");
  console.log("Maiar class: ", maiar);
  console.log("Hobbit class: ", hobbit);

  //explanation
  //Frodo and Sauron replace the previously set key/value pairs
  //capacity of has table is 8 beacuse of this(vs the 10 it would be if hobbit and Maiar weren't replaced)
}

//2
//replaces the values for the key "Hello World in both Hashmaps"
const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//3

function mod() {
  //part1
  console.log("part 1");
  console.log(10 % 11);
  console.log(22 % 11);
  console.log(31 % 11);
  console.log(4 % 11);
  console.log(15 % 11);
  console.log(28 % 11);
  console.log(17 % 11);
  console.log(88 % 11);
  console.log(59 % 11);

  //part2
  console.log("part 2");
  console.log(5 % 9);
  console.log(28 % 9);
  console.log(19 % 9);
  console.log(15 % 9);
  console.log(20 % 9);
  console.log(33 % 9);
  console.log(12 % 9);
  console.log(17 % 9);
  console.log(10 % 9);
}

//PART 1
//10, 22, 31, 4, 15, 28, 17, 88, 59
//HASHMAP
//[ 22 ] [ 88 ] [  ] [  ] [ 4 ] [ 15 ] [ 28 ] [ 17 ] [ 59 ] [ 31 ] [ 10 ]

//PART 2
//5, 28, 19, 15, 20, 33, 12, 17, 10
//HASHMAP
//[  ] [ 28 ] [    ] [ 12 ] [  ] [ 5 ] [ 15 ] [  ] [ 17 ]
//[  ] [ 19 ] [ 20 ] [    ] [  ] [   ] [ 33 ] [  ] [    ]
//[  ] [ 10 ] [    ] [    ] [  ] [   ] [    ] [  ] [    ]

//4

function noDups(string) {
  let singleCharsOnly = new HashMap();

  for (let i = 0; i < string.length; i++) {
    singleCharsOnly.setFirstOnly(string[i], string[i]);
  }

  return singleCharsOnly;
}

// main();
// WhatDoesThisDo();
// mod();
// console.log(noDups("google follup"));

const isPalindrome = (s) => {
  let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const forward = new HashMap();
  const backward = new HashMap();
  const stringArr = string.split("");

  for (let i = 0; i < stringArr.length; i++) {
    let letter = stringArr[i];
    let key = i;
    forward.simpleSet(letter, letter, key);
  }

  for (let j = stringArr.length - 1; j >= 0; j--) {
    let letter = stringArr[j];
    let key = j;
    backward.simpleSet(letter, letter, key);
  }

    let currentNode = forward;
    let currentNode2 = backward;
   
    
       

  for (let k = 0; k < forward.length; k++) {
    
     if (currentNode.indexGet(k) === currentNode2.indexGet(forward.length-1-k)) {
         
    } else if (currentNode.indexGet(k) !== currentNode2.indexGet(forward.length-1-k)) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("sracecars"));
