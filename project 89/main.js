
var last_position_of_x, last_position_of_y;

var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(_e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        
        /*
        Add the function moveTo() with coordinates
        last_position_of_x, last_position_of_y
        to start creation of line
        
        
        Add the function lineTo() with coordinates
        current_position_of_mouse_x, current_position_of_mouse_y
        to end creation of line
        */

        ctx.moveTo(last_position_of_x , last_position_of_y);
      

        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        
       
        ctx.stroke();
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
        }


    

   



/*
Assign screen.width to variable width



Decrease 70 from screen.width
and assign it to new_width

Decrease 300 from screen.height
and assign it to new_height
*/

var width = screen.width;
var height = screen.height;

new_width = screen.width - 70;
new_height = screen.height - 300;



if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


//Additional Activity
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
