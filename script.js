 let point = 0;
 let circle = document.querySelector("#circle");
 let Pos = {};
 let pts = document.querySelector("#score");
 let combo = 0;
 document.body.addEventListener("mousemove", function(event) {
     let img = document.querySelector("#image");
     Pos.y = event.pageY;
     Pos.x = event.pageX;
     console.log(Pos);

     img.style.top = (Pos.y - 40).toString() + "px";
     img.style.left = (Pos.x - 40).toString() + "px";

 });

 //  addEventListener("keypress", function(event) {
 //      if (event.key === 'z') {
 //          circle.style.backgroundColor = "#" + Pos.x + Pos.y;
 //          circle.style.top = Math.random() * 82 + "vh";
 //          circle.style.left = Math.random() * 82 + "vw";
 //          point += Math.round(300 + (300 * (combo * (combo * 0.005))));
 //          pts.textContent = point.toString();
 //          combo++;
 //          circle.textContent = combo.toString();
 //      }
 //      if (event.key === 'e') {
 //          circle.style.backgroundColor = "#" + Pos.x + Pos.y;
 //          circle.style.top = Math.random() * 82 + "vh";
 //          circle.style.left = Math.random() * 82 + "vw";
 //          point += Math.round(300 + (300 * (combo * (combo * 0.005))));
 //          pts.textContent = point.toString();
 //          combo++;
 //          circle.textContent = combo.toString();
 //      }
 //  });
 if (circle.addEventListener("click", function() {
         circle.style.backgroundColor = "#" + Pos.x + Pos.y;
         circle.style.top = Math.random() * 82 + "vh";
         circle.style.left = Math.random() * 82 + "vw";
         point += Math.round(300 + (300 * (combo * (combo * 0.005))));
         pts.textContent = point.toString();
         combo++;
         circle.textContent = combo.toString();

     })) {

 } else {
     // let timer = setInterval(function() {
     combo = 0;
     circle.textContent = combo.toString();
     circle.style.top = Math.random() * 82 + "vh";
     circle.style.left = Math.random() * 82 + "vw";

     // }, 1000);

 }