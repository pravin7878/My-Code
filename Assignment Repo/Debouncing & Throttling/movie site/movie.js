let container = document.getElementById('content')
let Errmsg = document.getElementById('massage')
async function getdata() {
    try {
        let quary = document.getElementById('search').value;
        let res = await fetch(`https://www.omdbapi.com/?s=${quary}&apikey=34d3d837`);
        data = await res.json()
        
        container.innerText = null;
        Errmsg.innerText = null;
        renderData(data);
    }
    catch (err) {
        console.log("Result Not Found");
        Errmsg.innerText = `Result Not Found , Please Type Right Title`;
    }
}


let timerID;

function Debounce(requast, delay) {
    if (timerID) {
        clearTimeout(timerID);
    }
    timerID = setTimeout(function () {
        requast()
    }, delay)
}


let createMovieDiv = (info) => {

    let movieDiv = document.createElement('div')
    let title = document.createElement('h3');
    let year = document.createElement('p');
    let type = document.createElement('p');
    let image = document.createElement('img');

    image.src = info.Poster
    title.textContent = `Title :- ${info.Title}`
    year.textContent = `Year:- ${info.Year}`
    type.textContent = `Type:- ${info.Type}`

    movieDiv.append(image, title, year, type)
    container.append(movieDiv)
}

let renderData = (data) => {
    let MovieData = data.Search
    MovieData.forEach(ele => {
        createMovieDiv(ele)
    });
}
