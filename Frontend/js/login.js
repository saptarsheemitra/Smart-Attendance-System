function validate(){
    const u_name = "admin"
    const pwd = "admin"
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username=="admin" && password == "admin") {
        console.log("Loged in")
        window.location.href = "details.html";
    }
    else{
        alert("Wrong Username/Password \n Try: \n Username: admin \n Password: admin")
    }
}