var min = 0;
var maxX = 920;
var maxy = 420;
var ag = document.getElementById("animalGame");
var lienzo = ag.getContext("2d");

var map  = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/tile2.png",   // el objeto se agrega despues
    estado: false
};

var cow = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/vaca.png",   // el objeto se agrega despues
    estado: false
};

var pig = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/cerdo.png",   // el objeto se agrega despues
    estado: false
};

var chicken = {   //no se puede agregar un objeto cow a la definición en JSON
    url: "./img/pollo.png",   // el objeto se agrega despues
    estado: false
};

map.image = new Image();  // we create var image
map.image .src = map.url;
map.image.addEventListener("load", drawMap);

cow.object = new Image();     // we create var object
cow.object.src = cow.url;
cow.object.addEventListener("load", drawCows);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", drawChickens);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", drawPigs);

var quantityCows = aleatorio(0,70);
var quantityPigs = aleatorio(0,70);



