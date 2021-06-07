document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register");
  var date = document.getElementsByClassName("day");
  let dates = [];
  let set_click = [];
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
  var j = 0;

  while (button[j]) {
    button[j].setAttribute('id', 'click' + j);
    set_click[j] = document.getElementById('click' + j);
    set_click[j].addEventListener('click', function () {
      console.log("OKKOKOKK");
    });
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
  console.log(all_events);
}