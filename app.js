const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "name", message: "What is your name?" }])
  .then((answers) => console.log(answers));
//
//
//
//
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
//
//
//
//
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;
// const fs = require("fs");

// const generatePage = (name, github) => {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     </head>

// <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//   `;
// };

// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

// console.log(name, github);
// console.log(generatePage(name, github));

//const generatePage = () => 'Name: Jane, Github: janehub';

// //function outside , cannot use while inside
// const printProfileData = profileDataArr => {
//   //This...
//  for (let i = 0; i < profileDataArr.length; i += 1){
//   console.log(profileDataArr[i]);
//    }
//   console.log('===========');

//   //is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
//  };
//  printProfileData(profileDataArgs);

//notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
//   for(let i=0; i< profileDataArr.length; i++){
//     console.log(profileDataArr[i]);
//   }
// };
