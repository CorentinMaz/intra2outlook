const request = require("axios");
const url = 'https://intra.epitech.eu/auth-6f31b8a817164044ace66cae8a6672fa91bca461/planning/load?format=json';

function prinata(data) {
    const obj = data;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].event_registered == 'registered')
            console.log(obj[i]);
    }
}

request.get(url)
    .then(res => {
        const data = res.data;
        prinata(data);
    })
    .then();
