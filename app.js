console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let btn = document.getElementById("submitSearch");
let input = document.getElementById("searchWord");
let image = document.querySelector("img");
let feedbackP = document.getElementById("feedback");

btn.addEventListener("click", (event) => {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=JpkIFuog5iHB8XGLWTfE5xaD16MyXKbU&s=" +
        input.value,
        {mode: "cors"})
    .then((res) => res.json())
    .then((res) => {
        image.src = res.data.images.original.url;
    })
    .catch((err) => { 
        console.error(err);
        feedbackP.textContent = err.message;
    });
}); 