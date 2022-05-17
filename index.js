import {myCollection} from './collection.js';

// let myCollection = [
//     {
//       name: "School of Code mug",
//       count: 1,
//       whatILike: "It has my cute pixel character on it!",
//     },
//     {
//       name: "School of Code hat",
//       count: 2,
//       whatILike: "An often overlooked fashion accessory",
//     },
//     {
//       name: "School of Code pillow",
//       count: 1,
//       whatILike: "Eat. Sleep. Code. Repeat :)",
//     },
//   ];

  console.log(myCollection);
  /*Task 2c
  - Create a function called describeItem ✅
  - Function should take an item as a parameter ✅
  - Function should console.log a message ✅
     - if there's one item, console.log 'I have a name. Here's what I like about it: whatILike' ✅
     - if there's more than one item, console log 'I have count names. Here's what I like about about them; whatILike' ✅
  - Call the function ✅
*/
  function describeItem(item) {
    if (item.count == 1) {
      console.log(`I have a ${chalk.cyan(item.name)}. Here's what I like about it: ${chalk.green(item.whatILike)}`);
    } else
      console.log (`I have ${chalk.yellow(item.count)} ${chalk.cyan(item.name)}s. Here's what I like about them: ${chalk.green(item.whatILike)}.`);
  }

  describeItem(myCollection[0]);

  /* Task 2d 
  - Make function called describeCollection ✅
  - Function takes array as a parameter ✅
  - Make the function loop through the array with a for loop ✅
  - Call describeItem for for each item so that it displays the message ✅
  - Call the function ✅ */

  function describeCollection (arr) {
    for (let i = 0; i < arr.length; i++) {
      describeItem(arr[i])
    }
  }
  describeCollection(myCollection);

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
