// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyA-12KACpWCSrMv_ce50Jcm8C9s1EBejt4",
//     authDomain: "ecommerce-4401f.firebaseapp.com",
//     databaseURL: "https://ecommerce-4401f-default-rtdb.firebaseio.com",
//     projectId: "ecommerce-4401f",
//     storageBucket: "ecommerce-4401f.appspot.com",
//     messagingSenderId: "1029245256953",
//     appId: "1:1029245256953:web:91ef21016ea29b22290e28"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// remove function 
var removeButtons=document.getElementsByClassName('btn-danger');
console.log(removeButtons.length);
for(var i=0;i<removeButtons.length;i++)
{
    var button=removeButtons[i]
    button.addEventListener('click',function(event){
        
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.remove();
        updateTotal();
    })
}




//varying input

var inputs=document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<inputs.length;i++)
{
    var input=inputs[i]
    input.addEventListener('change',function(event){
        var inputSelected=event.target
        if(isNaN(inputSelected.value)||inputSelected.value<=0)
        {
            inputSelected.value=1
        }
        updateTotal()
    })
}

//total updating function
function updateTotal(){
    var cartContainer=document.getElementsByClassName('cart-items')[0]
    var cartRows=cartContainer.getElementsByClassName('cart-row')
    var total=0
    for(var i=0;i<removeButtons.length;i++)
    {
        var cartRow=cartRows[i];
        var price=parseFloat(cartRow.getElementsByClassName('cart-price')[0].innerText)
        var quantity=cartRow.getElementsByClassName('cart-quantity-input')[0].value
        total=total+(price*quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText='Rs.'+total
}

