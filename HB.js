function submitBirthdayInfo() {
  const name = document.getElementById("nameInput").value.trim();
  const dob = document.getElementById("dobInput").value;
  const wishesDiv = document.getElementById("personal-wishes");
  const message = document.getElementById("message");

  if (!name || !dob) {
    alert("Vui lòng điền đầy đủ tên và năm sinh!");
    return;
  }

  // Tính tuổi
  const [day, month, year] = dob.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthday) age--;

  document.getElementById("birthday-form").style.display = "none";
  wishesDiv.style.display = "block";

  message.innerText = "Chúc Mừng Sinh Nhật!";
  message.style.animation = "none";
  void message.offsetWidth;
  message.style.animation = "popIn 1s ease-out";

  wishesDiv.innerHTML = `
  <div style="max-width: 800px; margin: 0 auto; text-align: center;">
    <p>Chúc mừng sinh nhật tuổi ${age} nhé ${name} – cô bé mới quen mà đã hơi quen quen!</p>
    <p>Tuổi ${age} – cái tuổi đẹp nhất để làm những điều mình thích… trừ khi bị bắt rửa bát, học bài hay dậy sớm. Người ta nói ${age} là tuổi mộng mơ, mà thực tế là mơ ngủ giữa tiết đầu và mộng ăn khuya trong phòng kín. Nhưng thôi, ai bảo mình đang ở cái tuổi đáng yêu (và hơi phiền toái) nhất trong đời.</p>
    <p>Mới quen thôi nhưng thấy em là kiểu con gái có năng lượng tích cực ấy – kiểu vừa lầy vừa lanh, nói chuyện tí là cười cả khúc. Thế nên hy vọng sinh nhật năm nay của em cũng sẽ vui như cái cách em lướt tin nhắn crush (hoặc tránh làm bài kiểm tra). Mong em luôn giữ được cái sự tươi tắn, ngơ ngác đáng yêu của tuổi này – nhưng nếu có bị đời tát nhẹ thì cũng nhớ bật lại một cú thông minh nha.</p>
    <p>Tuổi ${age} là tuổi có thể hơi bối rối trước tương lai, hơi loay hoay giữa học với chơi, nhưng không sao cả – ai cũng từng “bị ${age}” một lần trong đời. Cứ sống đúng chất em: vui vẻ, tử tế và một chút “hơi bất ổn nhưng không tiêu cực”. Và nếu có hôm nào thấy buồn – thì nhớ là em vừa mới bắt đầu những chương hay ho nhất cuộc đời mình đó, đừng gấp sách sớm nha.</p>
    <p>Chúc em tuổi mới đủ vui vẻ không quạo, đủ lạc quan để không lùi, và đủ nhây để ai gặp cũng thấy quý. À, nhớ là nếu có tổ chức tiệc sinh nhật thì đừng quên mời người viết thư siêu tâm lý này nhé. Tham dự vì bánh – nhưng ở lại vì tình bạn. </p>

    <!-- Ảnh chúc mừng ở cuối, căn giữa -->
    <img src="assets/wolfmuse-celebrate.gif" class="congrats-gif" alt="GIF Chúc mừng" style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto;" />
  </div>
`;
  startFireworks(); // Hàm pháo hoa cần định nghĩa riêng
}
