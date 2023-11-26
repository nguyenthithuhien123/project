let users = JSON.parse(localStorage.getItem("users"))||[];
function signup() {
    console.log("toi");
    let emailinput = document.getElementById("email_signup").value;
    let passwordinput = document.getElementById("password_signup").value;
    for (let i = 0; i<users.length; i++) {
        if (users[i].emailinput == emailinput) {
            if (users[i].passwordinput == passwordinput) {
                localStorage.setItem("userLogin", JSON.stringify(users[i].id))
                window.location.href = "/home.html";
                emailinput = document.getElementById("email_signup")="";
                passwordinput = document.getElementById("password_signup")="";
                return;
            } else {
                document.getElementById("password_signup") = "Mật khẩu sai";
            };
        } else {
            document.getElementById("alectmail_signup").innerHTML = "E-mail chưa được đăng ký"
        }
    }
}