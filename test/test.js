

 let btn = document.getElementById("send");
 btn.addEventListener('click', function(){

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    let obj = {name: name.value ,
               email:email.value ,
            phone: phone.value };

    myJson = JSON.stringify(obj);
    console.log( myJson);
 })



