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
 
 const firebaseConfig = {
    apiKey: "AIzaSyBLydAZ9YexyZvLcFp9vCnlRHkVXr0QamE",
    authDomain: "contactformportfolio-504d5.firebaseapp.com",
    databaseURL: "https://contactformportfolio-504d5-default-rtdb.firebaseio.com",
    projectId: "contactformportfolio-504d5",
    storageBucket: "contactformportfolio-504d5.appspot.com",
    messagingSenderId: "863715563668",
    appId: "1:863715563668:web:cf26f4f29184079ac2fc81"
  };
  

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