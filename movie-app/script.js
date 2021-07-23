const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const form = document.querySelector('form')
const main = document.querySelector('main');
const search = document.querySelector('search');
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

async function getMovies(){
    const resp = await fetch(APIURL);
    const respData =  await resp.json();
    console.log(respData);
    respData.results.forEach(movie=>{
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
        <img src="${IMGPATH+movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class='${getClassByRate(movie.vote_average)}'>${movie.vote_average}</span>
        </div>
        <div class='overview'>${movie.overview}</div>
        `
        main.appendChild(movieE1);
    })
    
    return respData;
}

function getClassByRate(vote){
    if(vote>=8){
        return 'green';
    }
    else if(vote>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}

getMovies();

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm = search.value;
})