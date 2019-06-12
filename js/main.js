// the api base url for requests
//const baseUrl = 'https://swapi.co/api/';
const baseUrl = 'https://fast-everglades-97829.herokuapp.com/homes';

//Creating the request
const xhr = new XMLHttpRequest();

//Opening the connection
xhr.open('GET', baseUrl, true);

//???
xhr.responseType = 'text';

//Send the actual request
xhr.send();

//Do something with the data
xhr.onload = function(){
    if(xhr.status === 200) {
        var swapiObj = JSON.parse(xhr.responseText);
        console.log(swapiObj);
    }
}