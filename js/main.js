const baseUrl = 'https://swapi.co/api/';

const xhr = new XMLHttpRequest();
xhr.open('GET', baseUrl, true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    if(xhr.status === 200) {
        var swapiObj = JSON.parse(xhr.responseText);
        console.log(swapiObj);
    }
}