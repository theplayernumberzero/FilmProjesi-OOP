const form = document.getElementById("film-form");  //tıklandığında ekleme yapmak için

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

//UI objesini başlatma
const ui = new UI();

//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
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

        ui.displayMessages("Film başarı ile eklendi.", "success");
    }

    ui.clearInput(titleElement, urlElement, directorElement);    //UI classında bulunan inputları temzileme function u
    e.preventDefault();     //submit olmasını engellemek için
}