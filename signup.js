function fn(){
    var valid=true;
    var name=document.getElementById('valid1').value;
    var email=document.getElementById('valid2').value;
    var password=document.getElementById('valid3').value;
    var cpassword=document.getElementById('valid4').value;
    var user=document.getElementById('valid5').value;
    var up=document.getElementById('valid6').value;

    if(name==''){
      valid=false;
      var com=document.getElementById('name')
      com.innerHTML="* please enter your name"
    }
    else if(name.length>5){
      valid=false;
      var com=document.getElementById('name')
      com.innerHTML="* Name must contain atlist 6 character"
    }
    else{
      document.getElementById('name').innerHTML='';
    }


    if(email==''){
      valid=false;
      var com=document.getElementById('email')
      com.innerHTML="* please enter your valid email"
    }
    else{
      document.getElementById('email').innerHTML='';
    }


    if(password==''){
      valid=false;
      var com=document.getElementById('pass1')
      com.innerHTML="* please enter your password here"
    }
    else if(password.length<6){
      valid=false;
      var com=document.getElementById('pass1')
      com.innerHTML="* Password should be 6 character long"
    }
    else{
      document.getElementById('pass1').innerHTML='';
    }


    if(cpassword==''){
      valid=false;
      var com=document.getElementById('pass2')
      com.innerHTML="* Retype your password here"
    }
    else{
      document.getElementById('pass2').innerHTML='';
    }
    if(cpassword!='' && password!=''){
      if(password!=cpassword)
      {
        valid=false;
        var com=document.getElementById('pass2')
        com.innerHTML="* Password dose not match" 
      }
      if(password==cpassword)
      {
        document.getElementById('pass2').innerHTML=''; 
      }
    }
    

    //user
    if(user==''){
      valid=false;
      var com=document.getElementById('uname')
      com.innerHTML="* User name type here"
    }
    else{
      document.getElementById('uname').innerHTML='';
    }
    if(user!='' && name!=''){
      if(name!=user)
      {
        valid=false;
        var com=document.getElementById('uname')
        com.innerHTML="* Name dose not match" 
      }
      if(name==user)
      {
        document.getElementById('uname').innerHTML=''; 
      }
    }
    //user password
    if(up==''){
      valid=false;
      var com=document.getElementById('upass')
      com.innerHTML="* Type your password here"
    }
    else{
      document.getElementById('upass').innerHTML='';
    }
    if(up!='' && password!=''){
      if(password!=up)
      {
        valid=false;
        var com=document.getElementById('upass')
        com.innerHTML="* Password dose not match" 
      }
      if(password==up)
      {
        document.getElementById('upass').innerHTML=''; 
      }
    }








    return valid;

}