let users = JSON.parse(localStorage.getItem("users")) || [];
function uuid() {
    return Math.floor(Math.random() * 85694235) + new Date().getMilliseconds();
}
function signup() {
    let userinput = document.getElementById("user").value;
    let emailinput = document.getElementById("email").value;
    let passwordinput = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let user = {
        userinput,
        emailinput,
        passwordinput,
        confirmPassword,
        id: uuid(),
        cart: [],
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].emailinput == user.emailinput) {
            document.getElementById("alectmail").innerHTML = "E-mail của bạn đã được đăng ký từ trước";
            return;
        }
    }
    document.getElementById("alectmail").innerHTML = "";
    if (passwordinput == confirmPassword) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "/SignIn.html"
        console.log(users)
    } document.getElementById("alectconfirmPassword").innerHTML = "Xác nhận mật khẩu không đúng"
}