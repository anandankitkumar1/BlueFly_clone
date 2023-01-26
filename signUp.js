function myFunction() {
    var x = document.getElementById("CreatePassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  document.querySelector("form").addEventListener("submit",getdata);
  let spdata = JSON.parse(localStorage.getItem("userData")) || [];
  var Cnt = false || localStorage.getItem("cnt");
  
  function getdata(){
    event.preventDefault(); 
  
    let obj ={};
  
    let fName = document.querySelector("#FirstName").value
    let lName = document.querySelector("#LastName").value
    let email = document.querySelector("#Email").value
    let password = document.querySelector("#CreatePassword").value
    console.log(name)
  
    obj.fName =fName;
    obj.lName =lName;
    obj.email = email;
    obj.password = password;
  
    spdata.push(obj);
  
    window.location.href="signin.html"
    Cnt = false;
    localStorage.setItem("userData", JSON.stringify(spdata))
    localStorage.setItem("cnt", Cnt);
  }


 