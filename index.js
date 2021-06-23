document.addEventListener("DOMNodeInserted", () => IntraToOutlook());

function getTimeFormat(event, start, end) {
  hour = event.time.substring(start, end).replace(':', '') + '00';
  date = event.date.replaceAll('-', '');
  time = date + 'T' + hour;
  return time;
}

function sendEmail(event) {
  const content = 'BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\n'
    + 'SUMMARY:' + event.event_name + '\n'
    + 'DTSTART;TZID=Europe/Paris:' + event.begin + '\n'
    + 'DTEND;TZID=Europe/Paris:' + event.end + '\n'
    + 'LOCATION:' + event.room + '\n'
    + 'DESCRIPTION:' + event.event_name + '\n'
    + 'STATUS:CONFIRMED\nSEQUENCE:3\nBEGIN:VALARM\nTRIGGER:-PT10M\nDESCRIPTION:Pickup Reminder\nACTION:DISPLAY\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR'
  var data = new URLSearchParams();

  data.set('to', 'clement.madzar@epitech.eu');
  data.set('subject', 'Planning intra');
  data.set('text', event.event_name);
  data.set('content', content);
  fetch("http://localhost:7000/v1/attachments-mail", {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data
  }).then(function(response) {
  });
}

function IntraToOutlook() {
  var button = document.getElementsByClassName("button register");
  var date = document.getElementsByClassName("day");
  let dates = [];
  let get_click = [];
  var events = [];
  var time = [];
  var room = [];
  var row = [];
  let activite = [];
  var event_name = [];
  let actions_event = [];
  let actions = [];
  var click = [];
  var all_events = [];
  var all_events_bis = [];

  var j = 0;
  while (button[j]) {
    button[j].setAttribute('id', 'click' + j);
    j++;
  }

  var i = 0;
  while (date[i]) {
    dates[i] = date[i].getAttribute("data-date");
    events = date[i].getElementsByClassName("events");

    var nb_events = 0;
    while (events[nb_events]) {
      row = events[nb_events].getElementsByClassName('row');

      var nb_row = 0;
      while (row[nb_row]) {
        var event_informations = {
          click: "",
          date: "",
          event_name: "",
          time: "",
          room: "",
          begin: "",
          end: "",
        };
        event_informations.date = dates[i];
        activite = row[nb_row].getElementsByClassName('activite');
        time = row[nb_row].getElementsByClassName('time');
        room = row[nb_row].getElementsByClassName('room');
        actions_event = row[nb_row].getElementsByClassName('actions_event');

        var act = 0;
        while (actions_event[act]) {
          actions = actions_event[act].getElementsByClassName('actions');

          var nb_act = 0;
          while (actions[nb_act]) {
            click = actions_event[nb_act].getElementsByClassName('button register');

            var c = 0;
            while (click[c]) {
              event_informations.click = click[c].getAttribute("id");
              c++;
            }
            nb_act++;
          }
          act++;
        }

        var a = 0;
        while (activite[a]) {
          event_name = activite[a].getElementsByClassName('event');
          event_informations.event_name = event_name[0].innerHTML;
          a++;
        }

        var t = 0;
        while (time[t]) {
          event_informations.time = time[t].innerHTML;
          t++;
        }

        var r = 0;
        while (room[r]) {
          event_informations.room = room[r].innerHTML;
          r++;
        }
        all_events.push(event_informations);
        nb_row++;
      }
      nb_events++;
    }
    i++;
  }

  var a = 0;
  var b = 0;
  while (all_events[a]) {
    if (all_events[a].click != "") {
      all_events_bis[b] = all_events[a];
      all_events_bis[b].begin = getTimeFormat(all_events[a], 0, 5);
      all_events_bis[b].end = getTimeFormat(all_events[a], 8, 13);
      b++;
    }
    a++;
  }

  j = 0;
  while (button[j]) {
    get_click[j] = document.getElementById('click' + j);
    get_click[j].addEventListener('click', function () {
      var i = 0;
      while (all_events_bis[i]) {
        if (all_events_bis[i].click == this.getAttribute("id")) {
          sendEmail(all_events_bis[i]);
        }
        i++;
      }
    });
    j++;
  }
}