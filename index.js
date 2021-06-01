document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register");
  var date = document.getElementsByClassName("day");
  var i = 0;
  let dates = [];
  let click = [];
  var event = [];
  var row = [];

  while (date[i]) {
    dates[i] = date[i].getAttribute("data-date");
    event = date[i].getElementsByClassName("events");
    var j = 0;
    while (event[j]) {
      row = event[j].getElementsByClassName('row');
      var x = 0;
      while (row[x]) {
        console.log("OK1");
        console.log(row[x]);
        x++;
      }
      console.log("OK2");
      console.log(event[j]);
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