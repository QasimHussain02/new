let target = document.querySelectorAll(".elem");

target.forEach(function (val){
    val.addEventListener("mousemove",function(dets){
        val.childNodes[2].style.opacity = "1";
        val.childNodes[2].style.left = dets.x+"px";
        // val.childNodes[2].style.top = dets.y+"px";
    })
    val.addEventListener("mouseleave",function(){
       val.childNodes[2].style.opacity = "0";
    })
})
