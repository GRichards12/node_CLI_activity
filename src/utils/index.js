const movieArr = [];
class Movie{
    constructor(title,actor = "Actor not specified",other="Other information not specified"){
        this.title = title;
        this.actor = actor;
        this.other = other;
     }
    
     add() {
        movieArr.push(this);
        console.log(movieArr);
      
     }
     remove() {
    movieArr.pop(indexOf());}}
    
module.exports = Movie,movieArr;