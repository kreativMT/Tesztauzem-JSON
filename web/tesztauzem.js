function akcio(){

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var akcios = JSON.parse(this.responseText)
        document.getElementById("akcios-teszta").innerText = akcios.akciosTeszta;
        document.getElementById("akcios-ar").innerText = akcios.akciosAr;
    console.log(this.responseText);
  }
  else{
    document.getElementById("akcios-teszta").innerText = "4 tojásos szélesmetélt, félkilós kiszerelésben";
    document.getElementById("akcios-ar").innerText = 320;
  }
});

xhr.open("GET", "http://localhost:8080/api/akcio");

xhr.send();

}

akcio();


function bekuld(){
    var data = JSON.stringify({
        uzenet: document.getElementById("jatek-valasz").value
      });
      if (!document.getElementById("jatek-valasz").value){
        alert("Kérjük adjon meg üzenetet");
        return
      }
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4 && this.status == 200) {
          console.log(this.responseText);
          alert("Köszönjük, hogy részt vett nyereményjátékunkban");
          document.getElementById("jatek-valasz").value = "";  
        }
      });
      
      xhr.open("POST", "http://localhost:8080/api/jatek");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.send(data);
    };
