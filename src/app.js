const Movie = require("./utils");
const input = process.argv;
//process.argv grabs terminal input
console.log(input);
const movies = [];
movies.push(input[2]);
if(input[2] === "add"){
    const movieObj = new Movie(input[3],input[4],input[5],input[6]);
    movieObj.add();
}
else if(input[2] ==='remove'){
    movieObj.remove();
}