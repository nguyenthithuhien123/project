function uuid() {
    return Math.floor(Math.random() * 85694235)
}

function gia() {
    return Math.floor(Math.random() * 1000000)
}
let phimrap = [
    {
        img: "phimnoibat/HARRY POTTER VÀ PHÒNG CHỨA BÍ MẬT.jpg",
        name: "HARRY POTTER VÀ PHÒNG CHỨA BÍ MẬT",
        id: uuid(),
        date: "Khởi chiếu ngày:9/11/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/TRÊU NHẦM YÊU THẬT.jpg",
        name: "TRÊU NHẦM YÊU THẬT",
        id: uuid(),
        date: "Khởi chiếu ngày:10/7/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/Ninh-an-nhu-mong.jpg",
        name: "NINH AN NHƯ MỘNG",
        id: uuid(),
        date: "Khởi chiếu ngày:8/6/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/phim-khoi-lua-nhan-gian-cua-toi.jpg",
        name: "KHÓI LỬA NHÂN GIAN CỦA TÔI",
        id: uuid(),
        date: "Khởi chiếu ngày:9/5/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/HẬU CUNG NHƯ Ý TRUYỆN.jpg",
        name: "HẬU CUNG NHƯ Ý TRUYỆN",
        id: uuid(),
        date: "Khởi chiếu ngày:9/4/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/Dua-Hau-Lap-Lanh-3.jpg",
        name: "DƯA HẤU LẤP LÁNH",
        id: uuid(),
        date: "Khởi chiếu ngày:9/3/2024",
        gia: gia(),
    },
    {
        img: "phimnoibat/Mùa_hè_yêu_dấu_của_chúng_ta_Poster.jpg",
        name: "MÙA HÈ YÊU DẤU CỦA CHÚNG TA",
        id: uuid(),
        date: "Khởi chiếu ngày:9/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/lich-chieu-phim-john-wick-4-3.jpg",
        name: "SÁT THỦ JOHN WICK: PHẦN 4",
        id: uuid(),
        date: "Khởi chiếu ngày:9/2/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/harry-potter-va-hon-da-phu-thuy.jpg",
        name: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY",
        id: uuid(),
        date: "Khởi chiếu ngày:9/3/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HARRY POTTER VÀ MỆNH LỆNH PHƯỢNG HOÀNG.jpg",
        name: "HARRY POTTER VÀ MỆNH LỆNH PHƯỢNG HOÀNG",
        id: uuid(),
        date: "Khởi chiếu ngày:9/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HARRY POTTER VÀ TÊN TÙ NHÂN NGỤC AZKABAN.jpg",
        name: "HARRY POTTER VÀ TÊN TÙ NHÂN NGỤC AZKABAN",
        id: uuid(),
        date: "Khởi chiếu ngày:12/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HÔN LỄ CỦA EM.jpg",
        name: "HÔN LỄ CỦA EM",
        id: uuid(),
        date: "Khởi chiếu ngày:8/9/2024",
        gia: gia(),
    },

    {
        img: "phimVIP/hoa-tuyet-diem-tung-tang.jpg",
        name: "HOA TUYẾT ĐIỂM",
        id: uuid(),
        date: "Khởi chiếu ngày:9/9/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/CỬA HÀNG TIỆN LỢI SAET BYUL.jpg",
        name: "CỬA HÀNG TIỆN LỢI SAET BYUL",
        id: uuid(),
        date: "Khởi chiếu ngày:9/12/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/CÔ NÀNG ĐẸP TRAI.jpg",
        name: "CÔ NÀNG ĐẸP TRAI",
        id: uuid(),
        date: "Khởi chiếu ngày:9/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/STRANGERS AGAIN.jpg",
        name: "STRANGERS AGAIN",
        id: uuid(),
        date: "Khởi chiếu ngày:1/4/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/ĐIỀN CANH KỶ.jpg",
        name: "ĐIỀN CANH KỶ",
        id: uuid(),
        date: "Khởi chiếu ngày:1/3/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/NGHỆ THUẬT SĂN QUỶ VÀ NẤU MÌPHẦN 2.jpg",
        name: "NGHỆ THUẬT SĂN QUỶ VÀ NẤU MÌ: PHẦN 2",
        id: uuid(),
        date: "Khởi chiếu ngày:1/2/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Sơn Hà Lệnh.jpg",
        name: "SƠN HÀ LỆNH",
        id: uuid(),
        date: "Khởi chiếu ngày:19/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/NGUYỆT CA HÀNH.jpg",
        name: "NGUYỆT CA HÀNH",
        id: uuid(),
        date: "Khởi chiếu ngày:13/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/ĐẠI MINH DƯỚI KÍNH HIỂN VI.jpg",
        name: "ĐẠI MINH DƯỚI KÍNH HIỂN VI",
        id: uuid(),
        date: "Khởi chiếu ngày:12/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Sơn Hà Lệnh.jpg",
        name: "SƠN HÀ LỆNH",
        id: uuid(),
        date: "Khởi chiếu ngày:16/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/NGUYỆT CA HÀNH.jpg",
        name: "NGUYỆT CA HÀNH",
        id: uuid(),
        date: "Khởi chiếu ngày:9/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/ĐẠI MINH DƯỚI KÍNH HIỂN VI.jpg",
        name: "ĐẠI MINH DƯỚI KÍNH HIỂN VI",
        id: uuid(),
        date: "Khởi chiếu ngày:8/12/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/TÌNH YÊU ANH DÀNH CHO EM.jpg",
        name: "TÌNH YÊU ANH DÀNH CHO EM",
        id: uuid(),
        date: "Khởi chiếu ngày:1/12/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Trạch Quân Ký.jpg",
        name: "TRẠCH QUÂN KÝ",
        id: uuid(),
        date: "Khởi chiếu ngày:13/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Mộng_Hoa_Lục_phim_truyền_hình.jpg",
        name: "MỘNG HOA LỤC",
        id: uuid(),
        date: "Khởi chiếu ngày:8/2/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Dữ Quân Ca.jpg",
        name: "DỮ QUÂN CA",
        id: uuid(),
        date: "Khởi chiếu ngày:29/2/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Dưới Bóng Trung Điện.jpg",
        name: "DƯỚI BÓNG TRUNG ĐIỆN",
        id: uuid(),
        date: "Khởi chiếu ngày:30/1/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Hoa du ký.jpg",
        name: "HOA DU KÝ",
        id: uuid(),
        date: "Khởi chiếu ngày:12/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/lich-chieu-phim-john-wick-4-3.jpg",
        name: "SÁT THỦ JOHN WICK: PHẦN 4",
        id: uuid(),
        date: "Khởi chiếu ngày:5/9/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/harry-potter-va-hon-da-phu-thuy.jpg",
        name: "HARRY POTTER VÀ HÒN ĐÁ PHÙ THỦY",
        id: uuid(),
        date: "Khởi chiếu ngày:18/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HARRY POTTER VÀ MỆNH LỆNH PHƯỢNG HOÀNG.jpg",
        name: "HARRY POTTER VÀ MỆNH LỆNH PHƯỢNG HOÀNG",
        id: uuid(),
        date: "Khởi chiếu ngày:1/1/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HARRY POTTER VÀ TÊN TÙ NHÂN NGỤC AZKABAN.jpg",
        name: "HARRY POTTER VÀ TÊN TÙ NHÂN NGỤC AZKABAN",
        id: uuid(),
        date: "Khởi chiếu ngày:13/07/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/HÔN LỄ CỦA EM.jpg",
        name: "HÔN LỄ CỦA EM",
        id: uuid(),
        date: "Khởi chiếu ngày:22/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/hoa-tuyet-diem-tung-tang.jpg",
        name: "HOA TUYẾT ĐIỂM",
        id: uuid(),
        date: "Khởi chiếu ngày:3/11/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/CỬA HÀNG TIỆN LỢI SAET BYUL.jpg",
        name: "CỬA HÀNG TIỆN LỢI SAET BYUL",
        id: uuid(),
        date: "Khởi chiếu ngày:2/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/CÔ NÀNG ĐẸP TRAI.jpg",
        name: "CÔ NÀNG ĐẸP TRAI",
        id: uuid(),
        date: "Khởi chiếu ngày:9/12/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/STRANGERS AGAIN.jpg",
        name: "STRANGERS AGAIN",
        id: uuid(),
        date: "Khởi chiếu ngày:16/10/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/ĐIỀN CANH KỶ.jpg",
        name: "ĐIỀN CANH KỶ",
        id: uuid(),
        date: "Khởi chiếu ngày:19/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/NGHỆ THUẬT SĂN QUỶ VÀ NẤU MÌPHẦN 2.jpg",
        name: "NGHỆ THUẬT SĂN QUỶ VÀ NẤU MÌ: PHẦN 2",
        id: uuid(),
        date: "Khởi chiếu ngày:1/12/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/Sơn Hà Lệnh.jpg",
        name: "SƠN HÀ LỆNH",
        id: uuid(),
        date: "Khởi chiếu ngày:5/5/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/NGUYỆT CA HÀNH.jpg",
        name: "NGUYỆT CA HÀNH",
        id: uuid(),
        date: "Khởi chiếu ngày:4/6/2024",
        gia: gia(),
    },
    {
        img: "phimVIP/ĐẠI MINH DƯỚI KÍNH HIỂN VI.jpg",
        name: "ĐẠI MINH DƯỚI KÍNH HIỂN VI",
        id: uuid(),
        date: "Khởi chiếu ngày:1/4/2024",
        gia: gia(),
    },
    {
        img: "img/nen header.jpeg",
        name: "36",
        id: uuid(),
        date: "Khởi chiếu ngày:1/10/2024",
        gia: gia(),
    },

]
localStorage.setItem("phimrap", JSON.stringify(phimrap))
/*function showphimrap(phimrap) {
    let text = "";
    for (let i = 0; i < phimrap.length; i++) {
        console.log(phimrap[i].id);
        text =
            `
      <div class="phimchieurap_item"> 
      <img src="${phimrap[i].img}" alt="">
      <div class ="phimrap">
      <P>${phimrap[i].name}</P>
      <p>GIÁ:${phimrap[i].gia}</p>
      </div>
      <div class="muave">
          <b>Mua ngay</b>
          <span onclick="renderLogin(${phimrap[i].id})" class="material-symbols-outlined">
              local_activity
          </span>
      </div> 
      `
        document.getElementsByClassName("phimchieurap")[0].innerHTML += text;
    }

}
showphimrap(phimrap);*/
// phim rap
let sophim_phimrap = 9;
let tongtrang_phimrap = Math.ceil(phimrap.length / sophim_phimrap);
console.log("tong trang", tongtrang_phimrap);
let sotrang_phimrap;
function showtrang_phimrap() {
    let text = "";
    for (let i = 1; i <= tongtrang_phimrap; i++) {
        text +=
            `
      <li class="trang_item_phimrap" onclick="showpase_phimrap(${i})">${i}</li>    
        `

    } document.getElementById("paste_phimrap").innerHTML += text;

}
showtrang_phimrap()
function showpase_phimrap(a) {
    for (let j = 0; j < tongtrang_phimrap; j++) {
        document.getElementsByClassName("trang_item_phimrap")[j].classList.remove("pastecolor_phimrap");
    }
    document.getElementsByClassName("phimchieurap")[0].innerHTML = "";
    let start = (a - 1) * sophim;//00
    let end = a * sophim - 1;//7
    let text = "";
    for (let i = 0; i < phimrap.length; i++) {
        if (i >= start && i <= end) {
            text =
                `
      <div class="phimchieurap_item"> 
      <img src="${phimrap[i].img}" alt="">
      <div class ="phimrap">
      <P>${phimrap[i].name}</P>
      <p>GIÁ:${phimrap[i].gia}</p>
      </div>
      <div class="muave">
          <b>Mua ngay</b>
          <span onclick="renderLogin(${phimrap[i].id})" class="material-symbols-outlined">
              local_activity
          </span>
      </div> 
      `
      document.getElementsByClassName("phimchieurap")[0].innerHTML += text;
        } 
    }
    document.getElementsByClassName("trang_item_phimrap")[a - 1].classList.add("pastecolor_phimrap");
    sotrang_phimrap = a;

}
showpase_phimrap(1)
function nextpaste_phimrap() {
    sotrang_phimrap++;

    if (sotrang_phimrap < tongtrang_phimrap) {

    } else { sotrang_phimrap = tongtrang_phimrap; }
    showpase_phimrap(sotrang_phimrap);
}

function prepaste_phimrap() {
    console.log(sotrang_phimrap);
    sotrang_phimrap--;
    if (sotrang_phimrap > 0) {
    } else { sotrang_phimrap = 1; }
    showpase_phimrap(sotrang_phimrap);
}