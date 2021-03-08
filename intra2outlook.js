const request = require("axios");
require("dotenv").config();
const url = `https://intra.epitech.eu/auth-${process.env.ID_AUTOLOGIN}/planning/load?format=json`;
var sessions = [];

function prinata(data) {
    const obj = data;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].event_registered == 'registered') {
            var session = [];
            session.push((obj[i]).titlemodule);
            session.push((obj[i]).acti_title);
            session.push((obj[i]).start);
            session.push((obj[i]).end);
            session.push((obj[i]).type_title);
            if (obj[i].room.code == undefined)
                session.push((obj[i]).room.type);
            else {
                for (var j = obj[i].room.code.length; obj[i].room.code[j] != '/'; j--);
                session.push((obj[i]).room.code.substring(j+1));
            }
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
