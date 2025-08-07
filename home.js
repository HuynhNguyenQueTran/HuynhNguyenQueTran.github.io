const cauDoVui = [
  {
    cauHoi: "Da trắng mịn, dáng cong cong,\nBụng rỗng tuếch, vẫn được lòng mọi người là ai?",
    dapAn: ["Cái chén", "Cái nón", "Cái thúng"],
    dung: "Cái nón",
    giaiThich: "Chiếc nón thường có màu trắng, hình dáng cong cong và rỗng bên trong. Dù không có giá trị vật chất lớn, nhưng nó rất được yêu quý vì che nắng, che mưa – giúp con người tránh được cái nắng gắt hay những cơn mưa bất chợt."
  },
  {
    cauHoi: "Sáng ra gáy to ba hồi,\nChẳng phải gà trống mà người vẫn tin là ai?",
    dapAn: ["Ông hàng xóm", "Con người", "Đồng hồ báo thức"],
    dung: "Đồng hồ báo thức",
    giaiThich: "Mỗi sáng, đồng hồ báo thức kêu 'réo rắt' để gọi người dậy – giống như tiếng gáy của gà trống. Dù không phải gà, nó vẫn đánh thức mọi người dậy đúng giờ, nên ai cũng tin và nghe theo nó."
  },
  {
    cauHoi: "Mặt em ai cũng nhìn,\nNhưng em chẳng nói năng,\nAi xấu em cũng hiện,\nAi đẹp em cũng phô.",
    dapAn: ["Camera", "Gương", "Mặt nước"],
    dung: "Gương",
    giaiThich: "Gương phản chiếu tất cả – không phân biệt xấu đẹp. Ai đứng trước nó cũng thấy rõ bản thân mình, vì thế nó luôn 'thật lòng' mà không nói một lời."
  },
  {
    cauHoi: "Không tay vẫn vỗ, không chân vẫn đi,\nKhông miệng vẫn nói những khi cần dùng.",
    dapAn: ["Máy tính", "Cái loa", "Bộ não"],
    dung: "Bộ não",
    giaiThich: "Bộ não không có tay chân miệng như con người, nhưng lại điều khiển mọi hành động, suy nghĩ, cảm xúc – chính là trung tâm chỉ huy của cơ thể!"
  },
  {
    cauHoi: "Trên trời rơi xuống từng hàng,\nKhông phải ai thả mà rơi đầy sân là gì?",
    dapAn: ["Lá rụng", "Tuyết", "Mưa"],
    dung: "Mưa",
    giaiThich: "Mưa là hiện tượng thiên nhiên – nước rơi từ trời xuống theo từng đợt như hàng lối, không do ai thả mà rơi khắp nơi, ướt cả sân nhà."
  },
  {
    cauHoi: "Một đôi anh em sinh đôi,\nSáng ra cùng dậy, tối về cùng nằm.\nKhông bao giờ đi riêng lẻ,\nCùng nhau đi khắp trăm nơi ngàn đường.",
    dapAn: ["Tay", "Chân", "Tất (vớ)"],
    dung: "Tất (vớ)",
    giaiThich: "Tất là một cặp đôi luôn đi cùng nhau – sáng đi học hay đi làm, tối cởi ra cùng lúc. Dù có bao xa, chúng cũng không rời nhau bao giờ."
  },
  {
    cauHoi: "Thân em vuông vức bốn bề,\nAi mà không mở thì em vẫn đóng im lìm là chi?",
    dapAn: ["Cửa sổ", "Quyển sách", "Tivi"],
    dung: "Cửa sổ",
    giaiThich: "Cửa sổ thường có hình vuông, và nếu không ai mở thì nó cứ đứng yên lặng lẽ. Nó chỉ hoạt động khi có người tác động."
  },
  {
    cauHoi: "Thân em chữ nghĩa đầy mình,\nNgười ta xem mãi nhưng em chẳng già là ai?",
    dapAn: ["Sách", "Máy tính", "Tờ báo"],
    dung: "Sách",
    giaiThich: "Sách chứa đầy chữ, tri thức, cảm xúc… Người ta đọc sách mỗi ngày, có thể lật đi lật lại, nhưng nó không hề già đi – vẫn nguyên vẹn nội dung và giá trị bên trong."
  },
  {
    cauHoi: "Con gì đầu dê mình ốc?",
    dapAn: ["Con dốc", "Con đồi mồi", "Con sò"],
    dung: "Con dốc",
    giaiThich: "'Đầu dê' (chữ 'd'), 'mình ốc' (chữ 'ốc') → ghép lại là 'dốc'. Đây là câu đố mẹo dựa trên chữ cái và âm đọc."
  },
  {
    cauHoi: "Cái gì càng lấy ra càng to?",
    dapAn: ["Cái hố", "Bí mật", "Chiếc khăn giấy"],
    dung: "Cái hố",
    giaiThich: "Bạn càng lấy đất ra (đào) thì cái hố càng lớn – một câu đố mang tính logic hình học đơn giản."
  },
  {
    cauHoi: "Con gì không biết đẻ mà vẫn có con?",
    dapAn: ["Con đường", "Con sông", "Con tem"],
    dung: "Con đường",
    giaiThich: "'Con đường' không phải là sinh vật, nhưng lại có thể có 'nhiều con hẻm, con ngách' – chơi chữ vui và mẹo!"
  }
];


let index = 0;

function hienQuiz() {
  const popup = document.getElementById("quizPopup");
  if (popup) {
    popup.style.display = "block";
    hienCauDoVui();
  }
}

function hienCauDoVui() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  if (index < cauDoVui.length) {
    const cauHoi = cauDoVui[index];
    let html = `<h3>${cauHoi.cauHoi}</h3>`;
    cauHoi.dapAn.forEach(dapAn => {
      html += `
        <label>
          <input type="radio" name="quiz" value="${dapAn}"> ${dapAn}
        </label><br>`;
    });
    html += `<br><button onclick="kiemTraDapAn()">Trả lời</button>`;
    html += `<div id="phanHoi" style="margin-top: 15px; font-weight: bold;"></div>`;
    content.innerHTML = html;
  } else {
    hienXacNhanCuoi();
  }
}

function kiemTraDapAn() {
  const luaChon = document.querySelector('input[name="quiz"]:checked');
  const phanHoiDiv = document.getElementById("phanHoi");

  if (!luaChon) {
    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi sai">
        Vui lòng chọn một đáp án!
      </div>
    `;
    return;
  }

  const dapAnChon = luaChon.value;
  const cauHoi = cauDoVui[index];
  const correctSound = document.getElementById("correctSound");

  if (dapAnChon === cauHoi.dung) {
    // ✅ Phát nhạc khi đúng
    if (correctSound) {
      correctSound.currentTime = 0;
      correctSound.play();
    }

    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi dung">
        That's Right! ${cauHoi.giaiThich}<br>
        <span class="giai-thich-them">${cauHoi.giaiThichThem || ''}</span>
        <div class="anh-phan-hoi">
          <img class="phan-hoi-img" src="assets/dung.gif" alt="Đúng rồi!">
        </div>
      </div>
    `;

    // ⏱️ Sau 4s thì dừng nhạc và sang câu mới
    setTimeout(() => {
      if (correctSound) correctSound.pause();
      correctSound.currentTime = 0;

      index++;
      hienCauDoVui();
    }, 4000);
  } else {
    // Trả lời sai không phát nhạc
    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi sai">
       Oh nooo! ${cauHoi.giaiThich}<br>
        <span class="giai-thich-them">${cauHoi.giaiThichThem || ''}</span>
        <div class="anh-phan-hoi">
          <img class="phan-hoi-img" src="assets/sai.gif" alt="Sai mất rồi!">
        </div>
      </div>
    `;
  }
}




function hienXacNhanCuoi() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  content.innerHTML = `
    <h2> Chỉ còn 1 bước nữa thôi!</h2>
    <p>Bạn đã sẵn sàng đến bước cuối chưa?</p>
    <button onclick="chonSanSang(true)">Yes</button>
    <button onclick="chonSanSang(false)">No</button>
    <div id="phanHoiSanSang" style="margin-top: 15px; font-weight: bold;"></div>
  `;
}
function chonSanSang(isYes) {
  const phanHoi = document.getElementById("phanHoiSanSang");

  if (isYes) {
    hienCauHoiChinh();
  } else {
    if (phanHoi) {
      phanHoi.innerHTML = `<span style="color: red;">Why noo!!! 🤨<br>Oh noo hãy chọn lại nha!</span>`;
    }
  }
}


function quayLai() {
  index--;
  hienCauDoVui();
}

function hienCauHoiChinh() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  content.innerHTML = `
    <h2>Câu hỏi cuối cùng</h2>
    
    <p>Hôm nay là ngày gì?</p>
    <label><input type="radio" name="q1" value="sinh nhật"> Sinh nhật ai đó</label><br>
    <label><input type="radio" name="q1" value="trung thu"> Trung thu</label><br>
    <label><input type="radio" name="q1" value="tết"> Tết</label><br>
    <label><input type="radio" name="q1" value="bình thường"> Một ngày bình thường nhưng tâm trạng đặc biệt</label><br>
    <label><input type="radio" name="q1" value="quên"> Không nhớ, trí nhớ bay theo mây gió</label><br><br>

    <p>Hôm nay bạn làm gì?</p>
    <label><input type="radio" name="q2" value="ngủ"> Ngủ quên cả thế giới</label><br>
    <label><input type="radio" name="q2" value="tiệc"> Tổ chức tiệc linh đình</label><br>
    <label><input type="radio" name="q2" value="học"> Cày bài như một chiến thần</label><br>
    <label><input type="radio" name="q2" value="ăn"> Ăn không nghỉ tay</label><br>
    <label><input type="radio" name="q2" value="khóc"> Vừa ăn vừa khóc vì nhớ deadline</label><br><br>

    <button onclick="kiemTraCauCuoi()">Xác nhận</button>
    <div id="phanHoiCuoi" style="margin-top: 20px; font-weight: bold;"></div>
  `;
}

function kiemTraCauCuoi() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const phanHoi = document.getElementById("phanHoiCuoi");

  if (!q1 || !q2) {
    phanHoi.innerHTML = `<span style="color: red;">Hãy chọn đầy đủ cả hai câu hỏi trước khi xác nhận.</span>`;
    return;
  }

  const dapAn1 = q1.value;
  const dapAn2 = q2.value;

  // Nếu chọn đúng đáp án
  if (dapAn1 === "sinh nhật" && dapAn2 === "tiệc") {
    window.location.href = "HB.html";
    return;
  }

  // Gợi ý nếu sai
  let loiNhan = "Gần đúng rồi nhưng vẫn chưa chính xác nhé! 🤔<br>";

  // Các thông điệp kết hợp hài hước
  const thongDiep = {
    "trung thu_ngủ": "Trung thu mà lại ngủ? Ông sao và lồng đèn đang khóc vì bạn đó!",
    "trung thu_học": "Người ta rước đèn, bạn rước sách. Đúng chuẩn học bá mùa lễ hội!",
    "trung thu_tiệc": "Rước đèn, ăn bánh, lại còn tiệc tùng? Bạn đang sống cuộc đời lý tưởng đấy!",
    "trung thu_ăn": "Ăn bánh trung thu là đúng rồi! Nhưng nhớ chia cho chị Hằng với nha!",
    "trung thu_khóc": "Tết thiếu nhi mà khóc thì sao nhỉ? Lồng đèn cũng buồn theo bạn luôn đó.",

    "tết_ngủ": "Tết mà ngủ là bỏ lỡ bao lì xì đó nha! Nằm mơ thấy tiền không tính đâu!",
    "tết_học": "Tết mà còn học á? Giáo viên chắc muốn tặng bạn bằng khen luôn!",
    "tết_tiệc": "Tết có tiệc là đúng bài. Nhưng... hôm nay mới là thứ mấy thôi bạn ơi!",
    "tết_ăn": "Ăn Tết đúng nghĩa là phải ăn... và ăn... và lại ăn nữa!",
    "tết_khóc": "Tết mà khóc thì chắc chưa nhận đủ lì xì rồi. Mau cười lên cho đỏ lộc đỏ tài nào!",

    "sinh nhật_ngủ": "Sinh nhật mà ngủ thì ai thổi nến? Bánh kem chờ bạn nãy giờ!",
    "sinh nhật_học": "Sinh nhật mà còn học? Bạn định tặng não thêm tuổi mới à?",
    "sinh nhật_tiệc": "Sinh nhật mà có tiệc là đúng chuẩn luôn! Ai mời mình chưa ta?",
    "sinh nhật_ăn": "Sinh nhật mà chỉ lo ăn thì ai hát mừng sinh nhật đây? Ăn vui thôi, đừng quên bạn bè!",
    "sinh nhật_khóc": "Sinh nhật mà khóc là sao? Chắc xúc động vì thêm tuổi rồi đúng không?",

    "bình thường_ngủ": "Ngủ một giấc ngày thường cũng là cách sống chill giữa bộn bề cuộc sống.",
    "bình thường_học": "Chăm chỉ ngày thường là cách để tỏa sáng vào dịp lễ đó!",
    "bình thường_tiệc": "Ngày thường mà có tiệc? Hơi bất ngờ đó, nhưng mà ai mời thế?",
    "bình thường_ăn": "Ngày thường mà ăn như lễ hội, bụng bạn là MVP hôm nay rồi đó!",
    "bình thường_khóc": "Ngày thường mà khóc chắc là bị deadline dí phải không? Có cần ôm không?",

    "quên_ngủ": "Không nhớ hôm nay là gì, nhưng bạn ngủ thì chắc hôm nay không quan trọng lắm.",
    "quên_học": "Không nhớ ngày gì mà vẫn học là đỉnh cao siêng năng đó nha!",
    "quên_tiệc": "Không nhớ hôm nay là gì nhưng có tiệc thì mình tới trước nha!",
    "quên_ăn": "Không nhớ ngày gì nhưng nhớ ăn thì vẫn là người sống có lý trí!",
    "quên_khóc": "Không nhớ hôm nay là gì, chỉ nhớ là khóc hơi nhiều. Nước mắt có deadline không nhỉ?"
  };

  // Tạo key từ 2 đáp án
  const key = `${dapAn1}_${dapAn2}`;

  // Hiển thị thông điệp phù hợp
  if (thongDiep[key]) {
    loiNhan += thongDiep[key];
  } else {
    loiNhan += `Sự kết hợp giữa "<b>${dapAn1}</b>" và "<b>${dapAn2}</b>" làm mình bối rối ghê... Bạn thử chọn lại xem sao nha! 😅`;
  }

  // Xuất phản hồi ra giao diện
  phanHoi.innerHTML = `<span style="color: #ff4081;">${loiNhan}</span>`;
}