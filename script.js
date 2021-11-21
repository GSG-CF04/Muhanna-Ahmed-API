// Start Cards Section //

let cards = document.querySelector(".cards");

function random(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}
let a = random(0, 250);
let b = random(0, 250);
let c = random(0, 250);
let d = random(0, 250);
let e = random(0, 250);
let f = random(0, 250);
let j = random(0, 250);
let h = random(0, 250);
let i = random(0, 250);
    fetch('https://restcountries.com/v3.1/all')
    .then((respons) =>{
        return respons.json();
    })
    .then((data) => {

        cards.innerHTML = `
        <div class="line">
            <div class="card">
                <img src = ${data[a].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[a].name.common}</h3>
                    <p><span>Capital: </span> ${data[a].capital[0]}</p>
                    <p><span>Population: </span>${data[a].population}</p>
                    <p><span>Language: </span>${Object.values(data[a].languages)[0]}</p>
                    <p><span>Continents: </span>${data[a].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[b].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[b].name.common}</h3>
                    <p><span>Capital: </span> ${data[b].capital[0]}</p>
                    <p><span>Population: </span>${data[b].population}</p>
                    <p><span>Language: </span>${Object.values(data[b].languages)[0]}</p>
                    <p><span>Continents: </span>${data[b].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[c].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[c].name.common}</h3>
                    <p><span>Capital: </span> ${data[c].capital[0]}</p>
                    <p><span>Population: </span>${data[c].population}</p>
                    <p><span>Language: </span>${Object.values(data[c].languages)[0]}</p>
                    <p><span>Continents: </span>${data[c].continents}</p>
                </div>
            </div>
        </div>
        <div class="line">
            <div class="card">
                <img src = ${data[d].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[d].name.common}</h3>
                    <p><span>Capital: </span> ${data[d].capital[0]}</p>
                    <p><span>Population: </span>${data[d].population}</p>
                    <p><span>Language: </span>${Object.values(data[d].languages)[0]}</p>
                    <p><span>Continents: </span>${data[d].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[e].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[e].name.common}</h3>
                    <p><span>Capital: </span> ${data[e].capital[0]}</p>
                    <p><span>Population: </span>${data[e].population}</p>
                    <p><span>Language: </span>${Object.values(data[e].languages)[0]}</p>
                    <p><span>Continents: </span>${data[e].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[f].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[f].name.common}</h3>
                    <p><span>Capital: </span> ${data[f].capital[0]}</p>
                    <p><span>Population: </span>${data[f].population}</p>
                    <p><span>Language: </span>${Object.values(data[f].languages)[0]}</p>
                    <p><span>Continents: </span>${data[f].continents}</p>
                </div>
            </div>
        </div>
        <div class="line">
            <div class="card">
                <img src = ${data[j].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[j].name.common}</h3>
                    <p><span>Capital: </span> ${data[j].capital[0]}</p>
                    <p><span>Population: </span>${data[j].population}</p>
                    <p><span>Language: </span>${Object.values(data[j].languages)[0]}</p>
                    <p><span>Continents: </span>${data[j].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[h].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[h].name.common}</h3>
                    <p><span>Capital: </span> ${data[h].capital[0]}</p>
                    <p><span>Population: </span>${data[h].population}</p>
                    <p><span>Language: </span>${Object.values(data[h].languages)[0]}</p>
                    <p><span>Continents: </span>${data[h].continents}</p>
                </div>
            </div>
            <div class="card">
                <img src = ${data[i].flags.svg} alt="Flag">
                <div class="details">
                    <h3>${data[i].name.common}</h3>
                    <p><span>Capital: </span> ${data[i].capital[0]}</p>
                    <p><span>Population: </span>${data[i].population}</p>
                    <p><span>Language: </span>${Object.values(data[i].languages)[0]}</p>
                    <p><span>Continents: </span>${data[i].continents}</p>
                </div>
            </div>
        </div>`
    })
    // End Cards Section //
