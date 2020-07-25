  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgKrdq3UJd_DxFrU_4RaP-zQsOH7_58tI",
    authDomain: "contact-form1-3a552.firebaseapp.com",
    databaseURL: "https://contact-form1-3a552.firebaseio.com",
    projectId: "contact-form1-3a552",
    storageBucket: "contact-form1-3a552.appspot.com",
    messagingSenderId: "553755780164",
    appId: "1:553755780164:web:7da837025ec05df77b0811",
    measurementId: "G-2ZH0CG5KCS"
  };

   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  //refernce mesages collection
  var messagesRef = firebase.database().ref('messages');



document.getElementById('contactform').addEventListener('submit',submitform());

// submit form

function submitform(e){
    e.preventDefault();
    //get values
    var name = getInputval('name');
    var number = getInputval('number');

    var email = getInputval('mail');

    var checkb = getInputval('check');
    var dob = getInputval('date');
    var suggestion = getInputval('sug');
    savemessages(name,number,mail,check,date,sug);

    


}
// function to get form values 
function getInputval(id){
    return document.getElementById(id).nodeValue;
}
// save messages to firebase
function savemessages(name,number,mail,check,date,sug){
    var newmessageref = messagesRef.push();
    newmessageref.set({
        name: name,
        number : number,
        email : mail,
        checkb : check,
        dob : date,
        suggestion : sug


    });
}
