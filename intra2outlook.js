// const fetch = require("node-fetch");
// let url = 'https://intra.epitech.eu/auth-6f31b8a817164044ace66cae8a6672fa91bca461/planning/load?format=json'
// // const test = fetch(url) .then(response => response.json()) .then(data => data);

// fetch(url)
//     .then(response => response.json())
//     .then(data => data);

// console.log(test);

const request = require("axios");

request.get('https://intra.epitech.eu/auth-6f31b8a817164044ace66cae8a6672fa91bca461/planning/load?format=json')
    .then(res => {
        const data = res.data;
        // console.log(data);
        console.log(data.get('event_required:'));
    })
