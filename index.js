// var filter = document.getElementsByClassName("item event")

// filter = 1;
document.addEventListener("DOMNodeInserted", () => test());

function test() {
  var button = document.getElementsByClassName("button register")
  var i = 0;
  let click = [];

  while (button[i]) {
    button[i].setAttribute('id', 'click' + i);
    click[i] = document.getElementById('click' + i);
    click[i].addEventListener('click', function () {
      console.log("OKOKO");
    });
    i++;
  }
  // console.log(click);
}

// var test  = document.getElementById("click0");

// test.addEventListener('click0', function () {
//     console.log("OKOKO");
// });
