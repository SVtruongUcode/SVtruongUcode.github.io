//Nội dung 1
const contentLetterSrart_actived = "From your Cly to my Hzy. Chào bạn nhỏ của em, chúc mừng kỉ niệm 1 năm bên nhau của mình nha! Không biết anh mở quà trước hay vào đây trước ta? Đáng lẽ ra món quà này tặng anh đúng ngày 25 tháng 11 cơ mà hỏng plan hết trơn nên em giữ tới tận bây giờ. Cơ mà nếu đưa đúng hôm thì chỉ có món quà bé bé em chuẩn bị trước tận 1 tháng chứ chưa có món quà lớn lớn. Món lớn lớn là em lỡ mua cái hộp lớn mà quà có chút éc do em không nghĩ nó nhỏ đến thế nên là em thêm món này vừa khít hộp luôn. Bé thích dùng đồ đôi với anh lắm nên chọn món bé bé với lớn lớn này. Món bé bé em làm một cặp, bé cáo hồng của em, bé báo hồng của anh mà nó cute quá do em chỉ thuật lại ý tưởng của em thôi còn shop làm, cơ mà vẫn xinh. Món lớn lớn thì em cũng nuôi ý định sẽ mua khá lâu rồi giờ có dịp mua liền, sau này mà có tài chính ổn định em mua chục chục bộ anh không chịu cũng phải chịu nha hihi hong là dỗi ó. À mà món lớn lớn này cũng là lí do mỗi lần anh kêu anh tính mua nó là em cản á. Đọc tới đây xong rồi thì mở quà đi nà, mở quà trước đó rồi thì ấn vào hộp quà mở thư đọc mí lời yêu thương hơi sến tẹo bé gửi đến anh nhà của bé nha! Yêu anh."

//Nội dung 2
const mainContentLetter = "Cảm ơn anh... Vì qua không ít những lần cãi vã hay giận hờn đặc biệt là những lần em tưởng chừng như sẽ không còn anh ngày sau mà anh đều chọn ở lại. Vì lúc nào cũng nhường nhịn em nhất là lúc em không bình thường. Vì luôn làm điểm tựa của em, em cũng muốn làm điểm tựa của anh nữa. Hiện tại mình như thế nào thì tương lai mình phải hơn thế nha! Thương anh."

// Gắn 1 link ảnh bất kì
let imgStart = document.querySelector(".myAI");
imgStart.src = "Pic1.png";  //Hình ảnh xuất hiện trong Nội dung 1
// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "Pic2.png"; //Hình ảnh xuất hiện trong Nội dung 2 sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho Nội dung 1
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơikkg
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}