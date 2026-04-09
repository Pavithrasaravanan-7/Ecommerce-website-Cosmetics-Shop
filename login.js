function validate(){
    const login_name='Manobala';
    const login_pasw='1234';
   let user_name = document.getElementsByName('UserName')[0].value;
   let password = document.getElementsByName('Password')[0].value;
   console.log(user_name);
   console.log(password);
   if(user_name==login_name && password==login_pasw){
    window.location.href="./index.html";
   }
   else{
    window.alert("Username or Password are Incorrect");
     location.reload();
   }

}