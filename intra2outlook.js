// const request = require("axios");
// require("dotenv").config();
// const url = `https://intra.epitech.eu/auth-${process.env.ID_AUTOLOGIN}/planning/load?format=json`;
// var sessions = [];
// var index = 0;

// function prinata(data) {
//     const obj = data;
//     for (var i = 0; i < obj.length; i++) {
//         session = [];
//         if (obj[i].event_registered == 'registered') {
//             session.titlemodule = (obj[i]).titlemodule;
//             session.acti_title = (obj[i]).acti_title;
//             session.start = (obj[i]).start;
//             session.end = (obj[i]).end;
//             session.type_title = (obj[i]).type_title;
//             if (obj[i].room.code == undefined)
//             session.room = (obj[i]).room.type;
//             else {
//                 for (var j = obj[i].room.code.length; obj[i].room.code[j] != '/'; j--);
//                 session.room = (obj[i]).room.code.substring(j+1);
//             }
//             sessions.push(session);
//             console.log(sessions[index].acti_title);
//             index++;
//         }
//     }
// }


// request.get(url)
//     .then(res => {
//         const data = res.data;
//         prinata(data);
//     })
//     .then();
