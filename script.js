button = document.getElementById('btn')
button.addEventListener("click", Login);
var check = document.createElement("button" );
  
const element = document.getElementById("form");
const field = document.createElement("input");
const container= document.createElement("div");
check.setAttribute("id", "Seek");
   check.innerText="Submit";
check.setAttribute("onclick","selectedItem();")
check.addEventListener("click ", selectedItem);
const with_button = document.createElement("button");
with_button.setAttribute("onclick","Money()");
      var withdraw_type =document.createElement("div");
   var withdraw_input = document.createElement("input")
function Login(){
  var userName = document.getElementById('name').value;
  var userPassword = document.getElementById('password').value;
 
  if( userPassword.length&&userName.length >1){
    
    
    container.setAttribute("id", "logged")
     container.innerText =` ZenTech Atm Machine \n\nHello ${userName}, you are welcome\n\n Here are your options\n\n *Withdraw\n\n*Deposit\n\n*Transfer Cash\n\n*Cardless withdraw\n\n*Open an account\n\n 
     *Exit\n\n please ${userName} type in exactly the option you want in the input field below`;
     

     field.setAttribute("id", "Field" )
     const include = document.getElementById("para");
     
    document.body.appendChild(container);
document.body.appendChild(field);
document.body.appendChild(check);
  
  
element.remove();






  }else{
    
alert('Something went wrong');
  }
}
function selectedItem(){
 
  var nextValue = document.getElementById("Field").value;
  nextValue.value = "";
  var withDraw = "1";
 
  
  var deposit = 0;
  deposit.value = 1;
  var Transfer = 0;
  Transfer.value = 2;
  var Cardless = 0;
  Cardless.value = 3;
  var openAccount = 0;
  openAccount.value = 4;
  var exit = 6;
  if( nextValue.length === 8){
    alert("withdraw ");
    container.remove();
    field.remove(); 
    check.remove();
    withdraw();
  }
  
   else if(nextValue.length === 7){
    alert("Deposit");
    container.remove();
    field.remove(); 
    check.remove();
  }
  else if(nextValue.length === 13){
    alert("Transfer");
    container.remove();
    field.remove(); 
    check.remove();
  }
  else if(nextValue.length === 17){
    alert("Cardless withdraw");
    container.remove();
    field.remove(); 
    check.remove();
  }
  else if(nextValue.length === 15){
    alert("Open an account ");
    container.remove();
    field.remove(); 
    check.remove();
  }
  else if(nextValue.length === 4){
    alert("Exit");
    container.remove();
    field.remove(); 
    check.remove();
    document.body.appendChild(element)
  }
  
  else {
    alert ("it didn't work");
  }
  
};
 function withdraw(){

  with_button.setAttribute("id","button");
         
   
   withdraw_input.setAttribute("id","inputField");

   with_button.innerText="submit";
   
   withdraw_type.setAttribute("id","withdraw")
   withdraw_type.innerText="Select account \n\n *Saving\n\n*Current"
   
  

   document.body.appendChild(withdraw_type);
   document.body.appendChild(withdraw_input);
   document.body.appendChild(with_button);

 };

  function Money (){
    var acount_type = document.getElementById("inputField").value;
    if( acount_type.length >= 6){
    alert("processing .... please wait ⚖️");
    withdraw_type.remove();
    inputField.remove();
    with_button.remove();
    
   Amount ();
    }else{
      alert("You must choose which of your account you would like to withdraw from");
    };
  };
  const Bigbag= document.createElement("form");
  const Howmuch = document.createElement("h3");
  Howmuch.innerText=" Type in  the Amount you want to withdraw but know that you cannot withdraw more than #1000,000"
  const muchInput= document.createElement("input");
  
  muchInput.setAttribute("id", "Finalput")
  const muchbutton= document.createElement("button");

  muchbutton.innerText="proceed";
  muchbutton.setAttribute("id", "much");
  muchbutton.setAttribute("onclick","Final();")
  Howmuch.setAttribute("id","How");
  var final = document.getElementById("Finalput").value;
  const Amount_inputted = document.getElementById("Finalput").value;
  function Amount(){
    document.body.appendChild(Bigbag);
    document.body.appendChild(Howmuch);
    document.body.appendChild(muchInput);
    document.body.appendChild(muchbutton);
    
  }
  
  function Final (){
    var Amount_drop = document.getElementById("Finalput").value;
        if(muchInput.value >= 1000 ){
          alert (`You are about withdrawing ${Amount_drop} naira`);
    alert(" Transaction processing....");
    alert("Did you know that the ZenTech Atm Machines are opened 24/7..? rush now to our nearest Atm spot to make your withdraw 💵");
    alert("Transaction Approved ✅")
    alert("Redirecting...")
    window.location.replace("Success.html")
    }else{
      alert ("you cannot withdraw less than a thousand naira");
    }
    
  }