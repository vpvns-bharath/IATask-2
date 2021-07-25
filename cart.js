
    // menu toggle
var x=document.getElementById("menu-items");
x.style.maxHeight="0px";
function MenuToggle(){
    if(x.style.maxHeight=="0px")
    {
        x.style.maxHeight="200px";
    }
    else
    {
        x.style.maxHeight="0px";
    }
}
//add to cart

var firebaseConfig = {
    apiKey: "AIzaSyA-12KACpWCSrMv_ce50Jcm8C9s1EBejt4",
    authDomain: "ecommerce-4401f.firebaseapp.com",
    databaseURL: "https://ecommerce-4401f-default-rtdb.firebaseio.com",
    projectId: "ecommerce-4401f",
    storageBucket: "ecommerce-4401f.appspot.com",
    messagingSenderId: "1029245256953",
    appId: "1:1029245256953:web:91ef21016ea29b22290e28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var submit=document.getElementsByClassName('submit')[0];
submit.addEventListener('click',function(){
    var location=document.getElementsByClassName('location')[0].value;
    var pincode =document.getElementsByClassName('pincode')[0].value;
    firebase.database().ref("/address").set({
        Address:location,
        Pincode:pincode
    })
    alert("Order confirmed");
})










 

 

