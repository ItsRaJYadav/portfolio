	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    //Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }



//================FIREBASE DB===============
 // Your web app's Firebase configuration
 
//  paste your firebaseConfig here

const _0x105de0=_0x2c9f;function _0x5231(){const _0x345926=['2670guJIrN','72492ZoQYWT','AIzaSyBLydAZ9YexyZvLcFp9vCnlRHkVXr0QamE','752BxkNLz','contactformportfolio-504d5','1210825waOaZy','891470CfiGHR','55szCIdK','contactformportfolio-504d5.appspot.com','https://contactformportfolio-504d5-default-rtdb.firebaseio.com','40909PBGJuP','863715563668','29038UlHbfb','51ZsFaLb','1:863715563668:web:cf26f4f29184079ac2fc81','contactformportfolio-504d5.firebaseapp.com','11322wDmQjA','2309688DCOSMS'];_0x5231=function(){return _0x345926;};return _0x5231();}(function(_0x34b7b7,_0xa2296c){const _0x2ee80a=_0x2c9f,_0x12cb11=_0x34b7b7();while(!![]){try{const _0x3d877e=-parseInt(_0x2ee80a(0x90))/0x1+parseInt(_0x2ee80a(0x84))/0x2*(-parseInt(_0x2ee80a(0x85))/0x3)+-parseInt(_0x2ee80a(0x8b))/0x4*(-parseInt(_0x2ee80a(0x91))/0x5)+parseInt(_0x2ee80a(0x89))/0x6+parseInt(_0x2ee80a(0x8f))/0x7+parseInt(_0x2ee80a(0x8d))/0x8*(-parseInt(_0x2ee80a(0x88))/0x9)+-parseInt(_0x2ee80a(0x8a))/0xa*(-parseInt(_0x2ee80a(0x82))/0xb);if(_0x3d877e===_0xa2296c)break;else _0x12cb11['push'](_0x12cb11['shift']());}catch(_0x53ea14){_0x12cb11['push'](_0x12cb11['shift']());}}}(_0x5231,0x78888));function _0x2c9f(_0x422254,_0x3af735){const _0x523114=_0x5231();return _0x2c9f=function(_0x2c9f83,_0x36ed18){_0x2c9f83=_0x2c9f83-0x82;let _0x4821ec=_0x523114[_0x2c9f83];return _0x4821ec;},_0x2c9f(_0x422254,_0x3af735);}const firebaseConfig={'apiKey':_0x105de0(0x8c),'authDomain':_0x105de0(0x87),'databaseURL':_0x105de0(0x93),'projectId':_0x105de0(0x8e),'storageBucket':_0x105de0(0x92),'messagingSenderId':_0x105de0(0x83),'appId':_0x105de0(0x86)};
  

  // initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var phoneno = getElementVal("phoneno");
    var emailid = getElementVal("emailid");
    var subject = getElementVal("subject");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name,phoneno, emailid,subject, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 9000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name,phoneno, emailid,subject, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      NAME: name,
      Contact_No:phoneno,
      Email: emailid,
      Subject:subject,
    Messages: msgContent,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  window.onload=function(){
    document.getElementById('loader').style.display="none";
    document.getElementById('content').style.display="block";

}; 

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);