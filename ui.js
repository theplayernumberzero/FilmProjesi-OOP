function UI(){

}
//Prototype e function ekleme
UI.prototype.addFilmToUI = function(newFilm){
    /* BU YAPI EKLENECEK

    <!-- <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> -->
    */
    const filmList = document.querySelector("#films");

    // += kullanırsan önceki bilgiler silinmez üstüne eklersin
    filmList.innerHTML += `

    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->
    
    `
}

UI.prototype.clearInput = function(element1, element2, element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message, type){
    //Alert divini buraya ekleyeceğiz
    const cardBody = document.querySelectorAll(".card-body")[0];

    //Alert divi oluşturma
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);  //card body e eklendi

    setTimeout(function(){  //divi belli bir süre ile gösterip yok etme
        div.remove();
    },2000);
}
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film){
        filmList.innerHTML += ` <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->`;
    });
}