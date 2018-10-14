let darthVader = new XMLHttpRequest ();
darthVader.addEventListener('load', function (){ //second
  const darthVaderObject = JSON.parse(this.responseText)
  document.getElementById('person4Name').innerHTML = darthVaderObject.name;
})
darthVader.open('GET', 'https://swapi.co/api/people/4/') //third
darthVader.send(); //last

let darthVaderHome = new XMLHttpRequest ();
darthVaderHome.addEventListener('load', function () {
  const dvHome = JSON.parse(this.responseText)
  document.getElementById('person4HomeWorld').innerHTML = dvHome.name;
})
darthVaderHome.open('GET', 'https://swapi.co/api/planets/1/')
darthVaderHome.send();


let hanSolo = new XMLHttpRequest ();
hanSolo.addEventListener('load', function () {
  const hanSoloObj = JSON.parse(this.responseText)
  document.getElementById("person14Name").innerHTML = hanSoloObj.name;
})
hanSolo.open("GET", "https://swapi.co/api/people/14/")
hanSolo.send();

let hanSoloSpec = new XMLHttpRequest ();
hanSoloSpec.addEventListener("load", function () {
  const hanSoloObj = JSON.parse(this.responseText)
  document.getElementById("person14Species").innerHTML = hanSoloObj.name;
})
hanSoloSpec.open("GET", "https://swapi.co/api/species/1/")
hanSoloSpec.send();


let allFilms = new XMLHttpRequest();
allFilms.addEventListener('load', function () {
  let filmObj = JSON.parse(this.responseText);
  let filmLiss = document.getElementById('filmList');

  for (let i = 0; i < filmObj.results.length; i++) {
    let listElements = document.createElement('li');
    listElements.innerHTML = filmObj.results[i].title;
    filmLiss.appendChild(listElements);

    
    for (let j = 0; j < filmObj.results[i].planets.length; j++) {
      const getPlanets = new XMLHttpRequest();
      getPlanets.open('GET', filmObj.results[i].planets[j]);
      getPlanets.send();

      getPlanets.addEventListener('load', function () {
        const planetObj = JSON.parse(this.responseText);
        let planetElement = document.createElement('ul');
        planetElement.innerHTML = planetObj.name;
        listElements.appendChild(planetElement);
      })
    }
  }
});
allFilms.open('GET', 'https://swapi.co/api/films/');
allFilms.send();
