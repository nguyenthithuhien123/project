
function renderLogin(idphim) {
    console.log(idphim);
    let user = localStorage.getItem("userLogin");
    let phimraps = JSON.parse(localStorage.getItem("phimrap")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (user == undefined) {
        alert("Đăng nhập để mua vé xem phim bạn nhé!");
    } else {
        for (let i = 0; i < users.length; i++) {

            if (users[i].id == user) {

                for (let j = 0; j < phimraps.length; j++) {
                    if (phimraps[j].id == idphim) {

                        let result = users[i].cart.findIndex(
                            (item) => {
                                return item.id == phimraps[j].id
                            }
                        )
                        if (result != -1) {
                            users[i].cart[result].quanlity = ++users[i].cart[result].quanlity;
                            localStorage.setItem("users", JSON.stringify(users));
                            updateCart();
                            alert("VÉ ĐÃ CÓ TRONG GIỎ HÀNG , MUA THÊM THÀNH CÔNG")
                        } else {
                            users[i].cart.push({ ...phimraps[j], quanlity: 1 });
                            localStorage.setItem("users", JSON.stringify(users))
                            updateCart();
                            alert("VÉ CHƯA CÓ TRONG GIỎ HÀNG , MUA VÉ THÀNH CÔNG")
                        }
                        break;
                    }

                }
                break;
            }

        }
    }
}
renderLogin();
function logout() {
    localStorage.removeItem("userLogin");
    window.location.reload()
}
function showhome() {
    document.getElementById("giohang").classList.add("an");
    document.getElementById("phanthan").classList.remove("an");
}
function showcart() {
    document.getElementById("cart").classList.remove("an");
    document.getElementById("phanthan").classList.add("an");

}
