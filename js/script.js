// zmienna z adresem dowcipów
var url = 'https://api.icndb.com/jokes/random';

// nasłuchiwanie buttona
var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

// paragraf
var paragraph = document.getElementById('joke');

// funkcja pobierająca żart
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}