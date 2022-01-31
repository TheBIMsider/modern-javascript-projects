document.querySelector(".get-joke").addEventListener("click", getJoke);

function getJoke(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

  xhr.onload = function() {

      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        document.querySelector(".jokes").innerHTML = `<h3>${response.value}</h3>`;
      }
    }

  xhr.send();

  e.preventDefault();
}
