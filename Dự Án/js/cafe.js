//duyyyyyyyyyyyyyyy
{
var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var Chuyenslide = document.getElementsByClassName("chuyen-slide")[0];
var Img= document.getElementsByClassName("img1");
var Max= KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
function Next() {
	if(Chuyen<Max)
		Chuyen += KichThuoc;
	else Chuyen=0;
	Chuyenslide.style.marginLeft = '-' + Chuyen + 'px';
}
function Pre() {
	if(Chuyen==0) Chuyen = Max
	else Chuyen -= KichThuoc;
	Chuyenslide.style.marginLeft = '-' + Chuyen + 'px';
}

setInterval(function(){
Next();
},3000);
}

function yeu() {
	alert("đã thêm vào yêu thích!!!");
	}
	function sk() {
	alert("Nhập thông tin thành công!!");
	}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.click = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  var input = document.getElementById("myInput");
      // định nghĩa hàm xử lý myFunction
      function timkiem() {
          var filter, ul, li, a, i;
          // lấy giá trị người dùng nhập
          filter = input.value.toUpperCase();
          ul = document.getElementById("myUL");
          li = ul.getElementsByTagName("li");
          // Nếu filter không có giá trị thị ẩn phần kết quare\
          if (!filter) {
            ul.style.display = "none";
          }else{
            // lặp qua tất cả các thẻ li chứa kết quả
            for (i = 0; i < li.length; i++) {
                // lấy thẻ a trong các thẻ li
                a = li[i].getElementsByTagName("a")[0];
                // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  //nếu có hiển thị phàn tử ul và các thẻ li đó
                    ul.style.display = "block";
                    li[i].style.display = "";
                } else {
                  // nếu không ẩn các thẻ li
                    li[i].style.display = "none";

                }
            }
          }
      }
      //gán sự kiện cho thẻ input
      input.addEventListener("keyup", timkiem);
      $('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'));
  if (min == 0) {
    var d = 0;
  } else d = min;
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1;
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1;
      if (x <= max) d += 1;
    }
    $this.attr('value', d).val(d)
  })
})
      function tongtien()
{ var x = document.getElementById("thu").innerHTML; tam=" ";
var d =document.getElementById("slt").value;	
 	for( i=x.length-1;i>=0;i--){
	{if (x[i]!=" ") tam=x[i]+tam;
	 else break;}};
  var y=parseInt(tam);
  if(y*d==0){
  	alert("Vui lòng điền số lượng sản phẩm!!!");
  }
  else{
 alert("Giao dịch thành công!!! Bưu kiện được vận chuyển theo địa chỉ đăng nhập!!!") ;
 alert("tổng tiền là: "+ y*d + "VND");}
}
{
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
}