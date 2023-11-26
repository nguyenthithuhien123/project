function header() {
    let user = localStorage.getItem("userLogin");
    let hello = document.querySelector("#helloname b");
    let gmails = document.querySelector("#gmail_hearder");
    let logout = document.getElementById("logout");
    let giohang = document.getElementById("giohang");
    let signin_signup = document.getElementsByClassName("signin_signup")[0];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (user == undefined) {
    }
    else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == user) {
                hello.innerHTML = ` Hello ${users[i].userinput} `;
                gmails.innerHTML = `${users[i].emailinput}`;

                logout.classList.remove("an");
                signin_signup.classList.add("an");
                giohang.classList.remove("an");
            }
        }
    }
};
header()