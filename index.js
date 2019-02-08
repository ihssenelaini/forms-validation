
function alertCondition(){

    let name=document.getElementById("name").value
    if(name==='')
    {
        alert('name empty')
    }
    let adress=document.getElementById("adress").value
    if(adress==='')
    {
        alert('adress empty')
    }

    let email=document.getElementById("email").value
      Reg=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    console.log(email)
    console.log( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
     if((Reg.test(email))===false)
     {
         alert('email invalid')
     }
    


    var password=document.getElementById("password").value
      Reg=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    
    console.log(password)
    console.log(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password))
    if((Reg.test(password))===false)
    {  
        alert('password invalid')
    }
     
     




}






