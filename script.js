 let circle = document.querySelector("#circle");
 let combo = 0;
 let comboscore = document.querySelector("#comboscore");
 let combopts = 0;
 let maxcombo = document.querySelector("#maxcombo");
 let maxcomboval = 0;
 let overCircle = false;
 let pos = {};
 let pts = document.querySelector("#score");
 let point = 0;
 let timer = 1000;
 let timer2 = 2000;
 let timeout;
 let x = 0;

 let isMobile = {
     Android: function() {
         return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function() {
         return navigator.userAgent.match(/BlackBerry/i);
     },
     iOS: function() {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function() {
         return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function() {
         return navigator.userAgent.match(/IEMobile/i);
     },
     any: function() {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
     }
 };

 if (isMobile.any()) {
     let img = document.querySelector("#image");
     img.style.display = "none";
 } else {
     document.body.addEventListener("mousemove", function(event) {
         let img = document.querySelector("#image");
         pos.y = event.pageY;
         pos.x = event.pageX;
         console.log(pos);

         img.style.top = (pos.y - 40).toString() + "px";
         img.style.left = (pos.x - 40).toString() + "px";
     });
 }

 function miss() {
     combo = 0;
     x = 0;
     circle.textContent = combo.toString();
     circle.style.borderColor = "white";
     circle.style.color = "white";
     circle.style.backgroundColor = "#" + pos.x + pos.y;
     circle.style.textShadow = "none";
     circle.style.top = Math.random() * 82 + "vh";
     circle.style.left = Math.random() * 82 + "vw";
     timer = 1000;
     timer2 = 2000;
 }

 function timeUp() {
     timeout = setTimeout(miss, timer);
 }

 function hit() {
     timer = 700;
     timer2 = 1000;
     circle.style.backgroundColor = "#" + pos.x + pos.y;
     circle.style.top = Math.random() * 82 + "vh";
     circle.style.left = Math.random() * 82 + "vw";
     point += Math.round(300 + (300 * (combo * (combo * 0.005))));
     pts.textContent = point.toString();
     x++;
     if (x === 1) {
         combopts = 0;
     }
     combopts += Math.round(300 + (300 * (combo * (combo * 0.005))));
     comboscore.textContent = combopts.toString();
     combo++;
     circle.textContent = combo.toString();
     if (combo > maxcomboval) {
         maxcomboval = combo
         maxcombo.textContent = combo.toString();
     }

     if (combo >= 50) {
         timer = 650;
         circle.style.color = "#d60816";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "white white white #d60816";
     }
     if (combo >= 100) {
         timer = 590;
         circle.style.color = "#1981a0";
         circle.style.textShadow = "1px 1px white";
         circle.style.borderColor = "white #1981a0";
     }
     if (combo >= 200) {
         timer = 500;
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
 }

 setInterval(timeUp, timer2);

 circle.addEventListener("mouseover", function() {
     overCircle = true;
 });

 circle.addEventListener("mousemove", function() {
     overCircle = true;
 });

 circle.addEventListener("mouseout", function() {
     overCircle = false;
 });

 document.addEventListener("keypress", function(event) {
     if (event.key === 'z' && overCircle == true) {
         hit();
     }
     if (event.key === 'e' && overCircle == true) {
         hit();
     }
     if (event.key === '*') {
         hit();
     }
     overCircle = false;
 });

 circle.addEventListener("click", function() {
     hit();
     overCircle = false;
 })