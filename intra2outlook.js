const request = require("axios");
const url = 'https://intra.epitech.eu/auth-6f31b8a817164044ace66cae8a6672fa91bca461/planning/load?format=json';

var sessions = [];

function prinata(data) {
    const obj = data;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].event_registered == 'registered') {
            var session = [];
            session.push((obj[i]).scolaryear);
            session.push((obj[i]).titlemodule);
            session.push((obj[i]).acti_title);
            session.push((obj[i]).start);
            session.push((obj[i]).end);
            session.push((obj[i]).type_title);
            if (obj[i].room.code == undefined)
                session.push((obj[i]).room.type);
            else
                session.push((obj[i]).room.code);
            sessions.push(session);
        }
    }
    console.log(sessions);
}

request.get(url)
    .then(res => {
        const data = res.data;
        prinata(data);
    })
    .then();
