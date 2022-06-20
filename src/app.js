const Movie = require("./utils");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const input = yargs(hideBin(process.argv)).argv
console.log(input);


if(input.type === "add" && input.number === 1){
        const movieObj = new Movie(input.title,input.actor,input.other);
        movieObj.add();
}
else if(input.type ==="add" && input.number > 1){
    const movieObj1 = new Movie(input.title1,input.actor1,input.other1)
    const movieObj2 = new Movie(input.title2,input.actor2,input.other2)
    const movieObj3 = new Movie(input.title3,input.actor3,input.other3)
    movieObj1.add();
    movieObj2.add();
    movieObj3.add();
}
