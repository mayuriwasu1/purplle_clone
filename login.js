
    var entered_number;
 function check(){
     entered_number=document.getElementById("mobile_number").value;
    var login_btn=document.getElementById("login-btn")
    if(entered_number.length==10){
       login_btn.style.backgroundColor="mediumvioletred"
    }
    else{
        login_btn.style.backgroundColor="rgb(192, 189, 189)"
    }
 }
  function login(){
      console.log("clicked")
      document.getElementById("login-box").style.display="none";
      document.getElementById("signin_box").style.display="block"
    entered_number=document.getElementById("mobile_number").value;
    console.log(entered_number)
  var check_number=document.getElementById("logged_number")
  check_number.value=entered_number
  }

  function closebtn(){
    window.location.href="home.html"
    // document.getElementById("login-box").style.display="none";
    // document.getElementById("signin_box").style.display="none"
  }

  function submitbtn(){
     
      window.location.href="home.html"
  }
  var backbtn=document.getElementById("back").addEventListener("click",function(){
        document.getElementById("login-box").style.display="block";
    document.getElementById("signin_box").style.display="none"
  })
