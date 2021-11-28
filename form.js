let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let pswd = document.getElementById("pass");
let temp=0;

function test()
{
   error.innerHTML="valid!!";
   error.style.color="green";
   error.style.fontSize="15px";
   error.style.padding="5px";
}

function validate(test)
{
  if(((email.value)=="Admin"||(email.value)=='admin')&&(pswd.value)=='12345')
   {
      test();
      // error.style.border="black solid 1px";
      location = "todo.html";
      return false; 
   }
else
   { 
    error.innerHTML=("invalid details!!");
    error.style.color="red";
    error.style.fontSize="15px";
    error.style.padding="5px";
    return false;
   }

}



