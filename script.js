var file = ['animal/lep.mp3','animal/lio.mp3','animal/hyena.mp3','animal/mon.mp3','animal/lemur.mp3'];
var pic = ['pics/lep.png','pics/lio.jpg','pics/hyena.jpg','pics/mon.png','pics/lemur.png'];

function laugh() {
  var random = Math.floor(Math.random() * file.length);
  var x = Math.floor(Math.random() * 60);
  var y = Math.floor(Math.random() * 60);
  var lol = document.createElement("AUDIO");
  var lol2 = document.createElement("IMG");
  lol2.setAttribute("src",pic[random]);
  lol2.style.position = "absolute";
  lol2.style.width = 'auto';
  lol2.style.height = '100px';
  lol2.style.top = (y+5)+"%";
  lol2.style.left = (x+5)+"%";
  lol.style.display = "none";
  lol.setAttribute("src",file[random]);
  document.body.appendChild(lol);
  document.body.appendChild(lol2);
  lol.load();
  lol.play();
  
  
  lol.onended = function() {
    lol.remove();
    lol2.remove();
  }
}