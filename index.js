document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register");
  var date = document.getElementsByClassName("day");
  var i = 0;
  let dates = [];
  let click = [];
  var event = [];
  var time = [];
  var room = [];
  var row = [];
  var activities = [];
  var activity = [];

  while (date[i]) {
    dates[i] = date[i].getAttribute("data-date");
    event = date[i].getElementsByClassName("events");
    var j = 0;
    while (event[j]) {
      console.log(event[j]);
      row = event[j].getElementsByClassName('row');
      var x = 0;
      while (row[x]) {
        console.log('-------------------------------------------------------------');
        console.log(row[x]);
        activities = row[x].getElementsByClassName('activite');
        time = row[x].getElementsByClassName('time');
        room = row[x].getElementsByClassName('room');
        var a = 0;
        while (activities[a]) {
          console.log(activities[a]);
          activity = activities[a].getElementsByClassName('event');
          console.log(activity[0]);
          a++;
        }
        var t = 0;
        while (time[t]) {
          console.log(time[t]);
          t++;
        }
        var r = 0;
        while (room[r]) {
          console.log(room[r]);
          r++;
        }
        x++;
      }
      j++;
    }
    i++;
  }
  console.log(dates);


  var j = 0;
  while (button[j]) {
    button[j].setAttribute('id', 'click' + j);
    click[j] = document.getElementById('click' + j);

    click[j].addEventListener('click', function () {
      console.log("OKKOKOKK");
    });
    j++;
  }
}