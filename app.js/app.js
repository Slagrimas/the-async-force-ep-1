let darthVader = new XMLHttpRequest();
darthVader.addEventListener('load', function () {
  const darthVaderObject = JSON.parse(this.responseText)
  document.getElementById('person4Name').innerHTML = darthVaderObject.name;
})
darthVader.open('GET', 'https://swapi.co/api/people/4/')
darthVader.send();

let darthVaderHome = new XMLHttpRequest();
darthVaderHome.addEventListener('load', function () {
  const dvHome = JSON.parse(this.responseText)
  document.getElementById('person4HomeWorld').innerHTML = dvHome.name;
})
darthVaderHome.open('GET', 'https://swapi.co/api/planets/1/')
darthVaderHome.send();


let hanSolo = new XMLHttpRequest();
hanSolo.addEventListener('load', function () {
  const hanSoloObj = JSON.parse(this.responseText)
  document.getElementById("person14Name").innerHTML = hanSoloObj.name;
})
hanSolo.open("GET", "https://swapi.co/api/people/14/")
hanSolo.send();

let hanSoloSpec = new XMLHttpRequest();
hanSoloSpec.addEventListener("load", function () {
  const hanSoloObj = JSON.parse(this.responseText)
  document.getElementById("person14Species").innerHTML = hanSoloObj.name;
})
hanSoloSpec.open("GET", "https://swapi.co/api/species/1/")
hanSoloSpec.send();


let filmListRequest = new XMLHttpRequest();
filmListRequest.addEventListener('load', function (res) {
  console.log('film list object', JSON.parse(res.currentTarget.response))
  let filmObject = JSON.parse(res.currentTarget.response);
  let filmListId = document.getElementById('filmList');
  for (let i = 0; i < JSON.parse(res.currentTarget.response).results.length; i++) {
    let filmTitleCreateLi = document.createElement('li');
    filmTitleCreateLi.className = 'film';
    filmListId.appendChild(filmTitleCreateLi);

    let filmTitleCreateH2 = document.createElement('h2');
    filmTitleCreateH2.className = 'filmTitle';
    filmTitleCreateH2.innerHTML = filmObject.results[i].title;
    filmTitleCreateLi.appendChild(filmTitleCreateH2);

    let filmPlanetCreateH3 = document.createElement('h3');
    filmPlanetCreateH3.innerHTML = 'Planets';
    filmTitleCreateLi.appendChild(filmPlanetCreateH3);

    let filmPlanetsUl = document.createElement('ul');
    filmPlanetsUl.className = 'filmPlanets';
    filmTitleCreateLi.appendChild(filmPlanetsUl);

    let filmPlanetsList = document.createElement('li');
    filmPlanetsList.className = 'planet';
    filmPlanetsUl.appendChild(filmPlanetsList);

    for (let j = 0; j < filmObject.results[i].planets.length; j++) {
      let planetListCreateH4 = document.createElement('h4');
      planetListCreateH4.className = 'planetName';
      filmPlanetsList.appendChild(planetListCreateH4);

      let newPlanet1 = new XMLHttpRequest();
      newPlanet1.addEventListener('load', function (res) {
        planetListCreateH4.innerHTML = JSON.parse(res.currentTarget.response).name;
      })

      newPlanet1.open('GET', filmObject.results[i].planets[j]);
      newPlanet1.send();
    }
  }
})
filmListRequest.open('GET', 'https://swapi.co/api/films');
filmListRequest.send();
