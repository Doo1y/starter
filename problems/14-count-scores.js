/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
index0 = {name: "Anthony", score: 2},
index1 = {name: "Winnie", score: 2},
index2 = {name: "Fred", score: 2},
index3 = {name: "Winnie", score: 2},
index4 = {name: "Fred", score: 2},
index5 = {name: "Anthony", score: 2},
index6 = {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let newObj = {};
  for (let index in people) {
    let obj = people[index];
    let key = obj["name"];
    let score = obj["score"];
    if (newObj[key] === undefined) {
      newObj[key] = score;
    } else {
      newObj[key] += score;
    }
  }
  return newObj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
