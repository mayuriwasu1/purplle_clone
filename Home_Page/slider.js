
// master slider


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



// another  master slider

// gif slider


// animated slider


function brandSlidera() {
  var slideList = document.querySelector(".slider_div2");

  var count = 1;
  var click = 2;
  var size = document.querySelector(".slider_div2").offsetWidth;
  if (size < 900) {
    click = 7;
  }
  if (count == 1) {
    document.getElementById("leftSwipea").style.opacity = 0.5;
    document.getElementById("leftSwipea").style.display = "hidden";
  }
  console.log(size);
  function stepBacka() {
    if (count == 2) {
      document.getElementById("leftSwipea").style.opacity = 0.5;
    }
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("rightSwipea").style.opacity = 1;

      count++;
    } else {
      document.getElementById("leftSwipea").style.opacity = 0.5;
      document.getElementById("leftSwipea").style.display = "hidden";
    }
  }
  function stepForwarda() {
    if (count == click - 1) {
      document.getElementById("rightSwipea").style.opacity = 0.5;
      document.getElementById("rightSwipea").style.display = "hidden";
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("leftSwipea").style.opacity = 1;
      count++;
    } else {
      document.getElementById("rightSwipea").style.opacity = 0.5;
      document.getElementById("rightSwipea").style.display = "hidden";
    }
  }
  document
    .getElementById("leftSwipea")
    .addEventListener("click", stepBacka);
  document
    .getElementById("rightSwipea")
    .addEventListener("click", stepForwarda);
}

brandSlidera();



//purple slider


// purple slider


function brandSliderp() {
  var slideList = document.querySelector(".slider_div1");

  var count = 1;
  var click = 4;
  var size = document.querySelector(".slider_div1").offsetWidth;
  if (size < 900) {
    click = 8;
  }
  if (count == 1) {
    document.getElementById("leftSwipep").style.opacity = 0.5;
    document.getElementById("leftSwipep").style.display = "hidden";
  }
  console.log(size);
  function stepBackp() {
    if (count == 2) {
      document.getElementById("leftSwipep").style.opacity = 0.5;
    }
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("rightSwipep").style.opacity = 1;

      count++;
    } else {
      document.getElementById("leftSwipep").style.opacity = 0.5;
      document.getElementById("leftSwipep").style.display = "hidden";
    }
  }
  function stepForwardp() {
    if (count == click - 1) {
      document.getElementById("rightSwipep").style.opacity = 0.5;
      document.getElementById("rightSwipep").style.display = "hidden";
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("leftSwipep").style.opacity = 1;
      count++;
    } else {
      document.getElementById("rightSwipep").style.opacity = 0.5;
      document.getElementById("rightSwipep").style.display = "hidden";
    }
  }
  document
    .getElementById("leftSwipep")
    .addEventListener("click", stepBackp);
  document
    .getElementById("rightSwipep")
    .addEventListener("click", stepForwardp);
}

brandSliderp();


// cards vala slider


function brandSlider() {
    var slideList = document.querySelector(".slider");
  
    var count = 1;
    var click = 8;
    var size = document.querySelector(".slider").offsetWidth;
    if (size < 900) {
      click = 11;
    }
    if (count == 1) {
      document.getElementById("leftSwipe").style.opacity = 0.5;
      document.getElementById("leftSwipe").style.display = "hidden";
    }
    console.log(size);
    function stepBack() {
      if (count == 2) {
        document.getElementById("leftSwipe").style.opacity = 0.5;
      }
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("rightSwipe").style.opacity = 1;
  
        count++;
      } else {
        document.getElementById("leftSwipe").style.opacity = 0.5;
        document.getElementById("leftSwipe").style.display = "hidden";
      }
    }
    function stepForward() {
      if (count == click - 1) {
        document.getElementById("rightSwipe").style.opacity = 0.5;
        document.getElementById("rightSwipe").style.display = "hidden";
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("leftSwipe").style.opacity = 1;
        count++;
      } else {
        document.getElementById("rightSwipe").style.opacity = 0.5;
        document.getElementById("rightSwipe").style.display = "hidden";
      }
    }
    document
      .getElementById("leftSwipe")
      .addEventListener("click", stepBack);
    document
      .getElementById("rightSwipe")
      .addEventListener("click", stepForward);
  }
  brandSlider();


//last slider

//last brand slider
function brandSlider10() {
    var slideList = document.querySelector(".slider_div");
  
    var count = 1;
    var click = 8;
    var size = document.querySelector(".slider_div").offsetWidth;
    if (size < 900) {
      click = 11;
    }
    if (count == 1) {
      document.getElementById("leftSwipe10").style.opacity = 0.5;
      document.getElementById("leftSwipe10").style.display = "hidden";
    }
    console.log(size);
    function stepBack10() {
      if (count == 2) {
        document.getElementById("leftSwipe10").style.opacity = 0.5;
      }
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("rightSwipe10").style.opacity = 1;
  
        count++;
      } else {
        document.getElementById("leftSwipe10").style.opacity = 0.5;
        document.getElementById("leftSwipe10").style.display = "hidden";
      }
    }
    function stepForward10() {
      if (count == click - 1) {
        document.getElementById("rightSwipe10").style.opacity = 0.5;
        document.getElementById("rightSwipe10").style.display = "hidden";
      }
      if (count < click) {
        slideList.style.left = "-" + count * 31 + "rem";
  
        document.getElementById("leftSwipe10").style.opacity = 1;
        count++;
      } else {
        document.getElementById("rightSwipe10").style.opacity = 0.5;
        document.getElementById("rightSwipe10").style.display = "hidden";
      }
    }
    document
      .getElementById("leftSwipe10")
      .addEventListener("click", stepBack10);
    document
      .getElementById("rightSwipe10")
      .addEventListener("click", stepForward10);
  }
  
  brandSlider10();