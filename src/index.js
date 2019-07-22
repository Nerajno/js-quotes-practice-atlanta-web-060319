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
    .then(data => console.log(data))
}

function makeQuoteCard() {
    `<li class='quote-card'>
    <blockquote class="blockquote">
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous</footer>
      <br>
      <button class='btn-success'>Likes: <span>0</span></button>
      <button class='btn-danger'>Delete</button>
    </blockquote>
  </li>`
    
}