function password(){
  
  var chars = "abcdefghijkl@mnopqrs$tuvwxyzABCDEF*GHIJKLMNOPQRSTUVWXZY1234567890987654321@#$&@#$*&*";
  
  var process1=chars.length;
  
  var pass=""
  
  for (let i = 0; i<10; i++) {
    var process2 = Math.floor(Math.random() *process1);
    pass += chars[process2];
  }

  
  console.log(pass)
  document.getElementById("textpass").innerHTML = pass;
  }

  
