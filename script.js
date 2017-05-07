 let point = 0;
 let circle = document.querySelector("#circle");
 let Pos = {};
 let pts = document.querySelector("#score");
 let combo = 0;
 let timer = 1000;
 let timer2 = 2000;
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
 //          timer = 700;
 //          timer2 = 1000;
 //          circle.style.backgroundColor = "#" + Pos.x + Pos.y;
 //          circle.style.top = Math.random() * 82 + "vh";
 //          circle.style.left = Math.random() * 82 + "vw";
 //          point += Math.round(300 + (300 * (combo * (combo * 0.005))));
 //          pts.textContent = point.toString();
 //          combo++;
 //          circle.textContent = combo.toString();
 //          clearTimeout(timeout);
 //      }
 //      if (event.key === 'e') {
 //          timer = 700;
 //          timer2 = 1000;
 //          circle.style.backgroundColor = "#" + Pos.x + Pos.y;
 //          circle.style.top = Math.random() * 82 + "vh";
 //          circle.style.left = Math.random() * 82 + "vw";
 //          point += Math.round(300 + (300 * (combo * (combo * 0.005))));
 //          pts.textContent = point.toString();
 //          combo++;
 //          circle.textContent = combo.toString();
 //          clearTimeout(timeout);
 //      }
 //  });

 function miss() {
     combo = 0;
     circle.textContent = combo.toString();
     circle.style.color = "white";
     circle.style.textShadow = "none";
     circle.style.borderColor = "white";
     circle.style.top = Math.random() * 82 + "vh";
     circle.style.left = Math.random() * 82 + "vw";
     timer = 1000;
     timer2 = 2000;
 }

 let timeout;

 function timeUp() {
     timeout = setTimeout(miss, timer);
 }

 setInterval(timeUp, timer2);

 circle.addEventListener("click", function() {
     timer = 700;
     timer2 = 1000;
     circle.style.backgroundColor = "#" + Pos.x + Pos.y;
     circle.style.top = Math.random() * 82 + "vh";
     circle.style.left = Math.random() * 82 + "vw";
     point += Math.round(300 + (300 * (combo * (combo * 0.005))));
     pts.textContent = point.toString();
     combo++;
     circle.textContent = combo.toString();
     if (combo >= 50) {
         timer = 650;
         circle.style.color = "#d60816";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "white white white #d60816";
     }

     if (combo >= 100) {
         timer = 575;
         circle.style.color = "#1981a0";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "white #1981a0";
     }
     if (combo >= 200) {
         timer = 475;
         circle.style.color = "#1bc646";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "#1bc646 #1bc646 white #1bc646";
     }

     if (combo >= 500) {
         timer = 350;
         circle.style.color = "#c40f88";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "#c40f88";
         circle.style.backgroundColor = "white";
     }
     clearTimeout(timeout);
 })