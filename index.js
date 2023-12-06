const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const MovieBox = document.querySelector("#movie-box");
const searchBox = document.querySelector("#search");

const getMovies = async (api) => {
    let response = await fetch(api);
    let data = await response.json();
     showMovies(data.results);
   
    // console.log(data);
}

const showMovies = (data) => {
    MovieBox.innerHTML = ""
    console.log(data);
    data.forEach((item) => {
        console.log(item)
        const innerBox = document.createElement("div");
        innerBox.classList = "box";
        innerBox.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" class="img">
            <div class="overlay"> 
            <div class="title"> 
                <h2> ${item.title} </h2>
                <span class="rating"> 
                ${item.vote_average }
                </span>
            </div>

            <div class="overview"> 
                <p>
                   ${item.overview}
                </p>
            </div>
            </div>
        `
        MovieBox.appendChild(innerBox);
    });
};

searchBox.addEventListener("keyup", function (e) {
    // console.log(e.target.value);
    if (e.target.value !== "") {
        getMovies(SEARCHAPI + e.target.value)
    } else {
        getMovies(APIURL);
    }
})

getMovies(APIURL);