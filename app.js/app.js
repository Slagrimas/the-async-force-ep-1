let darthVader = new XMLHttpRequest ();
darthVader.open('GET', 'https://swapi.co/api/people/4/')
darthVader.send();

darthVader.addEventListener('load', function (){ 
  const darthVaderObject = JSON.parse(this.responseText)
  document.getElementById('persons4name').innerHTML = darthVaderObject.name
});