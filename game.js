var min = 0;
var max = 420;
var ag = document.getElementById("animalGame");
var lienzo = ag.getContext("2d");

var map  = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/tile.png",   // el objeto se agrega despues
    estado: false
};

var cow = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/vaca.png",   // el objeto se agrega despues
    estado: false
};

map.image = new Image();  // we create var image
map.image .src = map.url;
map.image.addEventListener("load", drawMap);

cow.object = new Image();     // we create var object
cow.object.src = cow.url;
cow.object.addEventListener("load", drawCows)

/*var chicken = new Image();
chicken.src = "./img/pollo.png";
chicken.addEventListener("load", drawChickens)

var pig = new Image();
pig.src = "./img/cerdo.png";
pig.addEventListener("load", drawPig)*/


var cantidad = aleatorio(0,50);
document.write(cantidad +" Cows");