let count = 0; 
let slideshowData = [
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639455445_gv-web-banner-1298x418-22.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639370472_streax-professional_webhp.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632390971_elec-web2.gif",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638856741_takeover-web.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639382906_faces_web_hp.jpg",
    "https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638889093_hero-web.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg",
    "https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg"
];

document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif)"

function slideShow(count){
   if(count == 0) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1639401029_header-red-banner-web-1.gif)"
   if(count == 1) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639455445_gv-web-banner-1298x418-22.jpg)"
   if(count == 2) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639370472_streax-professional_webhp.jpg)";
   if(count == 3) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max,f-gif/mediafiles/ecomm/misc/1632390971_elec-web2.gif)"
   if(count == 4) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638856741_takeover-web.jpg)"
   if(count == 5) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1639382906_faces_web_hp.jpg)"
   if(count == 6) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/tr:w-1280,c-at_max/mediafiles/ecomm/misc/1638889093_hero-web.jpg)"
   if(count == 7) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg)"
   if(count == 8) document.querySelector("#slideShow_top").style.backgroundImage = "url(https://media6.ppl-media.com/mediafiles/ecomm/misc/1638952410_pu-web-brand-banner-1280x400_.jpg)"
}

document.querySelector("#left").addEventListener("click",leftSide)
document.querySelector("#right").addEventListener("click",rightSide)

function leftSide() {
    if(count == 0 ){
        count = slideshowData.length -1 ;    
    } 
    else {
        count--;
        // timer.stop() 
        // timer.start()
    }
    slideShow(count);
}

function rightSide() {
   if(count == slideshowData.length-1) {
       count = 0;
   }
   else {
    count++;
    // timer.stop() 
    // timer.start();
   }
   slideShow(count);
}

let timer = setInterval(function() {
    count++;
    if(count == slideshowData.length-1) count = 0;
    else if (count == 0)  count = slideshowData.length -1 ;
    slideShow(count);
},3000);