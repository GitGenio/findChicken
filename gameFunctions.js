
function aleatorio(min, max)
{
    var v = Math.floor(Math.random()*(max-min+1))+min;
    return v;
}

function draw()
{
    if(map.estado)
    {
        lienzo.drawImage(map.image, 0,0);// le pasamos el objeto y el punto inicial x , y
    }    
    if(cow.estado)
    {    
        for( i=0;i<quantityCows;i++)
        {
            var x = aleatorio(min, maxX);
            var y = aleatorio(min, maxy);
            lienzo.drawImage(cow.object, x,y);// le pasamos el objeto y el punto inicial x , y
        }
    }  
    if(pig.estado)
    {    
        for( i=0;i<quantityPigs;i++)
        {
            var x = aleatorio(min, maxX);
            var y = aleatorio(min, maxy);
            lienzo.drawImage(pig.image, x,y);// le pasamos el objeto y el punto inicial x , y
        }
    }      
    if(chicken.estado)
    {           
            var x = aleatorio(min, maxX);
            var y = aleatorio(min, maxy);
            lienzo.drawImage(chicken.image, x,y);// le pasamos el objeto y el punto inicial x , y
    }     
}

function drawMap()
{
    map.estado = true;
    draw();
}

function drawCows()
{
    cow.estado = true;  
    draw(); 
}
function drawPigs() 
{
    pig.estado = true;  
    draw(); 
}
function drawChickens() 
{
    chicken.estado = true;  
    draw(); 
}