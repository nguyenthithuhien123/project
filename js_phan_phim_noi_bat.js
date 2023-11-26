let listphimnoibats = [
    {
        img: "phimnoibat/HARRY POTTER VÀ PHÒNG CHỨA BÍ MẬT.jpg",
        name: "HARRY POTTER VÀ PHÒNG CHỨA BÍ MẬT",
        link: "https://phimmoi.io/xem-phim/harry-potter-va-phong-chua-bi-mat-168750727842573/tap-1-26306.html",
    },
    {
        img: "phimnoibat/TRÊU NHẦM YÊU THẬT.jpg",
        name: "TRÊU NHẦM YÊU THẬT",
        link: "https://phimmoi.io/phim/treu-nham-yeu-that.html",
    },
    {
        img: "phimnoibat/Ninh-an-nhu-mong.jpg",
        name: "NINH AN NHƯ MỘNG",
        link: "https://phimmoi.io/phim/ninh-an-nhu-mong.html",
    },
    {
        img: "phimnoibat/phim-khoi-lua-nhan-gian-cua-toi.jpg",
        name: "KHÓI LỬA NHÂN GIAN CỦA TÔI",
        link: "https://phimmoi.io/phim/khoi-lua-nhan-gian-cua-toi.html",
    },
    {
        img: "phimnoibat/HẬU CUNG NHƯ Ý TRUYỆN.jpg",
        name: "HẬU CUNG NHƯ Ý TRUYỆN",
        link: "https://phimmoi.io/phim/hau-cung-nhu-y-truyen.html",
    },
    {
        img: "phimnoibat/Dua-Hau-Lap-Lanh-3.jpg",
        name: "DƯA HẤU LẤP LÁNH",
        link: "https://phimmoi.io/phim/ngot-ngao-ruc-ro.html",
    },
    {
        img: "phimnoibat/Mùa_hè_yêu_dấu_của_chúng_ta_Poster.jpg",
        name: "MÙA HÈ YÊU DẤU CỦA CHÚNG TA",
        link: "https://phimmoi.io/phim/mua-he-yeu-dau-cua-chung-ta.html",
    },
]
function showPhimnoibat() {
    let text = "";
    for (let i = 0; i < 4; i++) {
        text +=
            `
            <div class="phimnoibat_item"> 
    <a href="${listphimnoibats[i].link}">
        <img src="${listphimnoibats[i].img}">
        <P>${listphimnoibats[i].name}</P>
    </a>
</div>
`
    } document.getElementsByClassName("phimnoibat")[0].innerHTML += text;
}
showPhimnoibat();
function nextImg() {
    document.getElementsByClassName("phimnoibat")[0].innerHTML = "";
    let listphimnoibat = listphimnoibats.shift();
    listphimnoibats.push(listphimnoibat);
    showPhimnoibat()
}
setInterval(nextImg, 2000);
function preImg() {
    document.getElementsByClassName("phimnoibat")[0].innerHTML = "";
    let listphimnoibat = listphimnoibats.pop();
    listphimnoibats.unshift(listphimnoibat);
    showPhimnoibat()
}