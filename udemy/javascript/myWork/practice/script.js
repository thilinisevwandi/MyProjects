const container = document.querySelector(".container");



const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
request.send();
request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText)
    console.log(data);
    container.innerHTML = `<img src='${data.flag}'/>`;
})

