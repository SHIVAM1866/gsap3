var initialPath="M 10 100 Q 500 100 900 100"
var finalPath="M 10 100 Q 500 100 900 100"
var string=document.getElementById("string")
string.addEventListener("mousemove",function(dets){
    var path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path",{
      attr:{d:path},
      duration:0.3,  
      ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.3)"
    })
})