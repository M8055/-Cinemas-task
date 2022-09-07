// let cl = console.log;
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


// :root {
  // --primary-color: #22254b;
  // --secondary-color: #373b69;
// }

let cl = console.log;

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let movie = document.getElementById("movie")
let searchBtn = document.getElementById("searchBtn")

function movies(ele){
    let result = "";
    ele.forEach(element => {
        result += `<div class="col-md-3">
        <div class="card mb-20">
            <div class="card-body">
                <figure class="cinema-img">
                            <img src="${IMG_PATH}${element.poster_path}" class="img" alt="${element.name}">
                        <figcaption class="cinema-info mt-2">
                            <h3>${element.name}</h3>
                            <span class="${onColor(element.vote_average)}">${element.vote_average}</span>
                        </figcaption>
                        <div class="overview">
                            <h3>${element.name}</h3>
                            <p>${element.overview}</p>
                        </div>
                </figure>
            </div>
        </div>
    </div>`
    });
    cinema.innerHTML = result;
}
movies(results)

function keyUp(ele){
    let keyVal = ele.target.value;
    let newArr = results.filter(e => {
        return e.title.toLowerCase().trim().includes(keyVal)
    })
    movies(newArr)
}

function onColor(item){
    if(item>=8){
        return "green"
    }else if(item>=6){
        return "orange"
    }else{
        return "red"
    }
}

searchBtn.addEventListener("keyup", keyUp)



// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// let moviePoster = document.getElementById("moviePoster");
// let seacrhInput = document.getElementById("search");
// seacrhInput.addEventListener("keyup",Enter)

// from  html body
// function htmlBody(arr){
    // let final = '';
    // arr.forEach(element => {
        // final += `<div class="col-md-3">
                    // <div class="card">
                        // <div class="card-body">
                            // <figure class="posters">
                                // <img src= "${IMG_PATH}${element.poster_path}" class="img-fluid" alt="${element.title}">
                                // <figcaption>
                                    // <p class="title">${element.title}</p>
                                // </figcaption>
                                // <span class="${colors(element.vote_average)}">${element.vote_average}</span>
                                // <div class="overview text-center">
                                    // <h4>Overview</h4>
                                    // <p class="">${element.overview}</p>
                                // </div>
                            // </figure>
                        // </div>
                    // </div>
                // </div>`
    // });
    
    // moviePoster.innerHTML = final;
// }
// htmlBody(results);



 // search movie function
// function Enter(event){
    // if(event.key){
        // let name = event.target.value.toLowerCase().trim();
        // let tResult = results.filter(movie => movie.title.toLowerCase().trim().includes(name));
        // htmlBody(tResult);
    // }else{
        // htmlBody(results);
    // }
// }

// rating color

// function colors(rating){
    // if(rating >= 8){
        // return "green"
    // }else if(rating >= 6){
        // return "yellow"
    // }else if( rating >= 4){
        // return "orange"
    // }else{
        // return "red"
    // }
// }