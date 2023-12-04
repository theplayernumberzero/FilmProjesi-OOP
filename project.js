const form = document.getElementById("film-form");  //tıklandığında ekleme yapmak için

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI objesini başlatma
const ui = new UI();

//Storage objesi üret
const storage = new Storage();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url ===""){
        //Hata Mesajı
        ui.displayMessages("Tüm alanlari doldurunuz.", "danger");
    }
    else{
        //Yeni film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);    //arayüze film ekleme

        storage.addFilmToStorage(newFilm);  //Storage a film ekleme

        ui.displayMessages("Film başari ile eklendi.", "success");
    }

    ui.clearInput(titleElement, urlElement, directorElement);    //UI classında bulunan inputları temzileme function u
    e.preventDefault();     //submit olmasını engellemek için
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling);    //elementler üzerinde gezinme

        ui.displayMessages("Silme işlemi başarili..","success");
    }
}
function clearAllFilms(){
    if(confirm("Emin misiniz ?")){      //Evete basarsa işlem true olarak döner ve satır çalışır.
        clearAllFilmsFromUI();
        clearAllFilmsFromStorage();
    }

}