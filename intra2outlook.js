const request = require("axios");
require("dotenv").config();
const url = `https://intra.epitech.eu/auth-${process.env.ID_AUTOLOGIN}/planning/load?format=json`;
var sessions = [];
var outlook = require('node-outlook');

var index = 0;

function change_date(date) {
    console.log(date)
}


function prinata(data) {
    const obj = data;
    for (var i = 0; i < obj.length; i++) {
        session = [];
        if (obj[i].event_registered == 'registered') {
            session.titlemodule = (obj[i]).titlemodule;
            session.acti_title = (obj[i]).acti_title;
            session.start = (obj[i]).start;
            session.end = (obj[i]).end;
            session.type_title = (obj[i]).type_title;
            if (obj[i].room.code == undefined)
            session.room = (obj[i]).room.type;
            else {
                for (var j = obj[i].room.code.length; obj[i].room.code[j] != '/'; j--);
                session.room = (obj[i]).room.code.substring(j+1);
            }
            sessions.push(session);

            change_date(sessions[index].start);

            var newEvent = {
                "Subject": sessions[index].acti_title + " [" + sessions[index].titlemodule + "]," + " (" + sessions[index].type_title + ")",
                "Body": {
                    "ContentType": "HTML",
                    "Content": "Salle -> " + sessions[index].room
                },
                "Start": "2021-03-22T18:42:00Z",
                "End": "2021-03-22T22:42:00Z",
            };

            let createEventParameters = {
                token: [`${process.env.OUTLOOK_TOKEN}`],
                event: newEvent
            };

            outlook.calendar.createEvent(createEventParameters, function (error, event) {
                if(error) {
                        console.log(error);
                } else {
                    console.log(event.Subject);
                }
            });
            console.log(sessions[index].acti_title);
            index++;
        }
    }
}


request.get(url)
    .then(res => {
        const data = res.data;
        prinata(data);
    })
    .then();
