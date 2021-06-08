// Bouton de suppression de chaque éléments
var myList = document.getElementsByTagName("li");
var i =  0;

while (i < myList.length) {
    var span = document.createElement("span");
      var txt = document.createTextNode("X");
      span.className = "erase";
      span.appendChild(txt);
      myList[i].appendChild(span);
      ++i;
    }