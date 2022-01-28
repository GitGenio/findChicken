
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
        for( i=0;i<cantidad;i++)
        {
            var x = aleatorio(min, max);
            var y = aleatorio(min, max);
            lienzo.drawImage(cow.object, x,y);// le pasamos el objeto y el punto inicial x , y
        }
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