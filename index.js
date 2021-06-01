document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register")
  var date = document.getElementsByClassName("day")
  // var data = document.getElementsByTagName("data-date")
  let dates = [];
  var i = 0;
  let click = [];
  var event;
  var events = [];
  var row;

  while (date[i]) {
    dates[i] = date[i].getAttribute("data-date");
    event = date[i].getElementsByClassName("events");
    console.log("OK3");
    row = event.getElementById
    console.log(event);
    // var j = 0;
    // while (event[j]) {
    //   events[j] = event[j].setAttribute('id', 'EVENT');
    //   // events[j].getElementById('EVENT');
    //   // events[j].setAttribute('id', 'row');
    //   // row = events[i].getElementById("row")
    //   events[j] = event[j].getAttribute("class");
    //   console.log("OK1");
    //   console.log(events[j]);
    //   console.log("OK2");
    //   j++;
    // }
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