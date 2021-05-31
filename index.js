document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register")
  var date = document.getElementsByClassName("date")
  var i = 0;
  let click = [];

  while (date[i]) {
    date[i].setAttribute('id', 'date' + i);
    console.log(date[i]);
    i++;
  }

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