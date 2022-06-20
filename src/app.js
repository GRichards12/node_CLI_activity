const Movie = require("./utils");
const input = process.argv;
//process.argv grabs terminal input
console.log(input);
const movies = [];
movies.push(input[2]);
//one way
if(input[2] === "add"){
    const movieObj = new Movie(input[3],input[4],input[5],input[6]);
    movieObj.add();
    console.log(movieObj);
}
else if(input[2] ==='remove'){
    movieObj.remove();
}

//other way
// if(input[2] === "add"){
//     const movieObj1 = new moveBy(input[3],input[4]);
//     movieObj1.add();
//     const movieObj2 = new moveBy(input[5],input[6]);
//     movieObj2.add();
//     console.log(movieObj1);
//     console.log(movieObj2);
// }