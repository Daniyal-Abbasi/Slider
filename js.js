

let flag = 0;

function controler(n){
       flag = flag + n;
       slider(flag);
    
}

 slider(flag);
function slider(num){
  var slide = document.getElementsByClassName("slide");
//   slide = slide.style.transition="all 5s"
    // console.log(slide

    if (num == slide.length) {
        flag = 0;
        num = 0
        
    }

    if (num < 0) {
        flag = slide.length-1;
        num = slide.length-1;
        
    }
    for (const y of slide) {
        y.style.display="none"
        
    }
    

   slide[num].style.display="block",
   slide[num].style.transition="all 10s"
} 