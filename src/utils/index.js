const movieArr = [];
class Movie{
    constructor(title1,actor1 = "Not specified",title2,actor2 = "Not specified"){
        this.title1 = title1;
        this.actor1 = actor1;
        this.title2=title2;
        this.actor2=actor2;
     }
    
     add() {
        movieArr.push(this);
        console.log(movieArr);
      
     }
     remove() {
    movieArr.pop(indexOf());}}
    
module.exports = Movie;