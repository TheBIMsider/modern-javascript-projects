document.querySelector(".random-joke").addEventListener("click", getRanJoke);

function getRanJoke(e) {
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

document.querySelector(".category-joke").addEventListener("click", getCatJoke);

function getCatJoke(e) {
  let category = document.querySelector("select").value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.chucknorris.io/jokes/random?category=${category}`, true);
console.log(category);
  xhr.onload = function() {

    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      document.querySelector(".jokes").innerHTML = `<h3>${response.value}</h3>`;
    }
  }

  xhr.send();

  e.preventDefault();
}