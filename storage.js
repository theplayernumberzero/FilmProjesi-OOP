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

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    //Arrayden silmek için splice() metodu kullan
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
}