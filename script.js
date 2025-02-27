let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");
let selected = "";

for (let list of lists) {
  list.addEventListen("dragstart", function (e) {
    selected = e.target;

    rightbox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    rightbox.addEventListener("drop", function (e) {
      rightbox.appendChild(selected);
      selected = null;
    });


  });
}
