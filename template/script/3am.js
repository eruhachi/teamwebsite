//made by Jeroen
const ids = ["idNav", "idBody"]; /* put all your ids in it like "id1",
                                               "id2", etc*/

const cave_sounds = [
  "cave1",
  "cave2",
  "cave3",
  "cave4",
  "cave5",
  "cave6",
  "cave7",
  "cave8",
  "cave9",
  "cave10",
  "cave11",
  "cave12",
  "cave13"
];

function gon(i) {
  document.getElementById(i).style.visibility = "hidden";
}

function threeam() {
  ids.forEach(gon);
  var choice = Math.floor((Math.random() * cave_sounds.length) + 1);
  document.getElementById(cave_sounds[choice]).play();
  document.title = "";
}
