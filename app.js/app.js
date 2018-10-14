let darthVader = new XMLHttpRequest ();
darthVader.open('GET', 'https://swapi.co/api/people/4/')
darthVader.send();

darthVader.addEventListener('load', function (){ 
  const darthVaderObject = JSON.parse(this.responseText)
  document.getElementById('persons4Name').innerHTML = darthVaderObject.name;
});

let darthVaderHome = new XMLHttpRequest ();
darthVaderHome.open('GET', "https://swapi.co/api/planets/1/")
darthVader.send();

darthVaderHome.addEventListener('load', function () {
  const darthVaderObject = JSON.parse(this.responseText).innerHTML = darthVaderObject.name;
  document.getElementById('person4HomeWorld')
});


