function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));
}
//Film datalarını array olarak alan function
Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("flims"));  //local storage da veriler string olarak tutulur. Stringi array e çevirdik.
    }

    return films;
}