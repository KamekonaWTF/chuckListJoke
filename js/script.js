const joke = document.getElementById('fetchJoke')
const list = document.getElementById('jokeList')
const borrar = document.getElementById('clear')
const limpiar = document.getElementById('clearAll')

//EventListener y Fetch de la API

joke.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then (res => {
            if(!res.ok) {
                throw new Error ("Chuck Norris se ha cargado la página web")
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            const listaChistes = [];
            
            list.innerHTML += `<li>${data.value}</li>`;
            localStorage.setItem(data.value, "")
            console.log(localStorage)
            
        })
        .catch((error) => {
            list.innerText = 'Chuck Norris se ha cargado la página web'
    });

});

limpiar.addEventListener("click", () => localStorage.clear());

//Hacer lista de chistes

//Guardar en el LocalStorage

//Borrar chiste de la LocalStorage

 