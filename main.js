var mouse_event = "Empty";
var last_position_of_x, last_position_of_y;

var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d");

var color = "black";
var width_of_line = 7;

Canvas.addEventListener("mouseup", mouse_up);
function mouse_up(s) {
    mouse_event = "mouseup";
}

Canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(s) {
    mouse_event = "mouseleave";
}

Canvas.addEventListener("mousedown", mouse_down);
function mouse_down(s) {
    mouse_event = "mousedown";
}

Canvas.addEventListener("mousemove", mouse_move);
function mouse_move(s) {
 var current_position_of_mouse_x = s.clientX - Canvas.offsetLeft;
 var current_position_of_mouse_y = s.clientY - Canvas.offsetTop;

 if (mouse_event == "mousedown")
 {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
 }
 last_position_of_x = current_position_of_mouse_x;
 last_position_of_y = current_position_of_mouse_y;
}