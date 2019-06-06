const baseUrl = 'https://swapi.co/api/';

const xhr = XMLHttpRequest();
xhr.open('GET', baseUrl, true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
    if(xhr.status === 200) {
        console.log('success')
    }
}