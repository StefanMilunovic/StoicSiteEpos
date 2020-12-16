function pokreniVreme() {
    var datum = new Date();
    var sat = datum.getHours();
    var min = datum.getMinutes();
    var sek = datum.getSeconds();
    document.getElementById("time").innerHTML = sat+":"+min+":"+sek;
    var t = setTimeout(pokreniVreme,1000);

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





function myFunction() {
    var at = document.getElementById("mail").value.indexOf("@gmail.com");
    var at1 = document.getElementById("mail").value.indexOf("@yahoo.com");
    var at2 = document.getElementById("mail").value.indexOf("@hotmail.com");
    var fname = document.getElementById("name").value;
    
    submitOK = "true";
  
    if (fname.length == 0) {
      alert("Name can't be left blank");
      submitOK = "false";
    }else{
        submitOK = "true";
    }
  
    if (at == -1 && at1 == -1 && at2 == -1) {
      alert("Not a valid e-mail!");
      submitOK = "false";
    }
  
    if (submitOK == "false") {
      return false;
    }else{
        alert("Submitted!");
    }

    
  }
