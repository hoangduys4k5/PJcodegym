

{//to ảnh
 function toanh(x) {
  x.style.height = "350px";
  x.style.width = "350px";
}

function bth(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}
}
{ // trắng đen
 $(document).ready(function(){
        $("img[id='an']").mouseenter(function(){
            $(this).removeClass("filter_grayscale");
        })
        $("img[id='an'").mouseleave(function(){
            $(this).addClass("filter_grayscale");
        })

    })
}
{ // 124
  var elements = document.getElementsByClassName("column");
var i;
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}
function two() {
  for (i = 0; i < elements.length; i++) {
  // IE10
    elements[i].style.flex = "50%";
  }
}
function four() {
  for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
  }
}
}

