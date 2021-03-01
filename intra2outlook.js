const fetch = require("node-fetch");

let url = 'https://intra.epitech.eu/auth-6f31b8a817164044ace66cae8a6672fa91bca461/planning/load?format=json'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));