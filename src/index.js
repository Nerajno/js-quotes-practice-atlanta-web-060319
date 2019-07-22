// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

//Step one
let quotes_url = "http://localhost:3000/quotes?_embed=likes"

document.addEventListener('DOMContentLoaded', setUpPage)

function setUpPage(){
    fetchQuotes()
    makeQuoteCard()
   // document.addEventListener("click", handleAddPokemon

}
function fetchQuotes(){
    fetch(quotes_url)
    .then(response => response.json())
    .then(addAllQuotes)

}

let addAllQuotes = (quotes) => {
    console.log("quote", quotes);
    quotes.forEach(makeQuoteCard)
  
}

function makeQuoteCard(element) {
    // debugger
   let quoteCard =  `<li class='quote-card'>
    <blockquote class="blockquote">
      <p class="mb-0">${element.quote}</p>
      
      <footer class="blockquote-footer">${element.author}</footer>
      <br>
      <button class='btn-success'>Likes: <span>${element.likes}</span></button>
      <button class='btn-danger'>Delete</button>
    </blockquote>
  </li>`

    let mainQuoteBody = document.querySelector("#quote-list")
    mainQuoteBody.innerHTML += quoteCard
    
}