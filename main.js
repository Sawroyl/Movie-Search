function movie() {
    
    const title = document.getElementById("movieName").value;
    const apikey = "4e1b4efa";
    const url = `https://www.omdbapi.com/?t=${title}&apikey=4e1b4efa`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            movieTitle.innerHTML = `Title: <b id='tittle'>${title}</b>`;
            rating.innerHTML = `IMDB Rating: <b>${data.imdbRating}</b> <br>Release Year: <b>${data.Year}</b><br> Director Name: <b>${data.Director}</b> <br>Description: <b>${data.Plot}</b> <br><br><img src = "${data.Poster}">`;
        })
        .catch(error => console.log(error));
        
}   
document.getElementById("Search").addEventListener("click",movie);

const Search = document.getElementById('Search')
Search.addEventListener('click',() => {
    const searchTerm = Search.value.trim();

    if (searchTerm === '') {
        showError('Please enter movie name')
        return;
    }
})


/**function aError(ex){
    const errorMessage = document.createElement('p');
    errorMessage.textContent = ex;
}

if (data.Response === 'False'){
    aError(data.Error);

}**/




