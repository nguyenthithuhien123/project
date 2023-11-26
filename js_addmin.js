let users = JSON.parse(localStorage.getItem("users")) || [];
function showUsers() {
    let text = "";
    for (let i = 0; i < users.length; i++) {
        text +=
            `
<tr>
<td>${i + 1}</td>
<td>${users[i].id}</td>
<td>${users[i].userinput}</td>
<td>${users[i].emailinput}</td>
<td>${users[i].passwordinput}</td>
 <td><button onclick="xoa(${users[i].id})">XÓA</button></td>
</tr>   
`
    }
    document.getElementById("joho_item").innerHTML = text
};
showUsers();
function xoa(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            let xacnhan = confirm("Bạn có muốn xóa không?")
            if (xacnhan) {
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                showUsers();
                break;

            }

        }
    }
}
