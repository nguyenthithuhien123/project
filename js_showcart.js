function updateCart() {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    let phimraps = JSON.parse(localStorage.getItem("phimrap"));
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == user) {
            text = ""
            let carts = users[i].cart
            let pay = 0;
            for (let j = 0; j < carts.length; j++) {
                text +=
                    `
<tr>
            <td>${j + 1}</td>
            <td>
                <div class="sanpham">
                    <img src="${carts[j].img}" alt="">
                    <div class="chitiet">
                        <P>${carts[j].name}</P>
                        <p>${carts[j].date}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="sove">
                    <p>${carts[j].quanlity}</p>
                    <div class="tang_giam">
                        <button onclick="tang(${carts[j].id})">+</button>
                        <button onclick="giam(${carts[j].id})">-</button>
                    </div>
                </div>
            </td>
            <td>${carts[j].gia}</td>
            <td>${carts[j].quanlity * carts[j].gia}</td>
        </tr> 
`
                pay += carts[j].quanlity * carts[j].gia;
            }
            document.getElementById("pay").innerHTML = pay;
            document.getElementById("item").innerHTML = text

        }
    }
}
updateCart();
function tang(idphim) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userLogin) {
            let carts = users[i].cart
            for (let j = 0; j < carts.length; j++) {
                if (carts[j].id == idphim) {
                    carts[j].quanlity = ++carts[j].quanlity;
                    localStorage.setItem("users", JSON.stringify(users))
                    updateCart();
                }
            }
        }

    }
}
function giam(idphim) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userLogin) {
            let carts = users[i].cart
            for (let j = 0; j < carts.length; j++) {
                if (carts[j].id == idphim) {
                    carts[j].quanlity = --carts[j].quanlity;
                    if (carts[j].quanlity > 0) {
                        localStorage.setItem("users", JSON.stringify(users))
                        updateCart();
                    } else {
                        confirm("BẠN KHÔNG MUA VÉ NÀY NỮA ĐÚNG KHÔNG")
                        if (confirm) {
                            carts.splice(j, 1);
                            localStorage.setItem("users", JSON.stringify(users))
                            updateCart();
                        }
                    }
                }

            }

        }
    }

}

function payed() {
    document.getElementById("payed").classList.toggle("an");
}