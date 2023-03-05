const jokecontainer = document.querySelector("#joke")
const btn = document.querySelector("#btn")
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
  
let getJoke = () => {
    jokecontainer.classList.remove("fade")
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokecontainer.textContent = `${item.joke}`
            jokecontainer.classList.add("fade");
        });
  console.log(item);
}
btn.addEventListener("click", getJoke);
getJoke();