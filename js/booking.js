function choose_language() {
    var imageElement = document.getElementById("image");
    var imageSrc = imageElement.src;
    var language_content = document.querySelector("#change_language-content");
    var languageButtons = language_content.querySelectorAll(".sub-form");
    languageButtons.forEach(function(button) {
        var img = button.querySelector("img");
        var imgSrc = img.src;
        var span = button.querySelector("span");
        if (imageSrc === imgSrc) {
          button.classList.add("choose_btn");
          span.classList.add("blue_color");
          button.innerHTML += '<i class="fa-solid fa-check show_check"></i>';
        } else {
          button.classList.remove("choose_btn");
          span.classList.remove("blue_color");
          var checkIcon = button.querySelector(".fa-check");
          if (checkIcon) {
            checkIcon.remove();
          }
        }
    });
    var showContent = document.getElementById("change_language-content");
    showContent.style.display = "block";
    var buttons = showContent.querySelectorAll(".sub-form");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var imgSrc = this.querySelector("img").src;
  
        var flagButton = document.getElementById("language");
        flagButton.querySelector("img").src = imgSrc;
        showContent.style.display = "none";
      });
    }
}
function choose_currency() {
    var currencyButton = document.getElementById("currency");
    var currencyValue = currencyButton.innerText;
    
    var changeCurrencyWrapper = document.querySelector(".change_currency-wrapper");
    var currencyButtons = changeCurrencyWrapper.querySelectorAll(".sub-form");
    currencyButtons.forEach(function(button) {
        var span = button.querySelector("span:last-of-type");
        var spans = button.querySelectorAll("span");
        var currencyCode = span.innerText;
        if (currencyCode === currencyValue) {
          button.classList.add("choose_btn");
          spans.forEach(function(span) {
            span.classList.add("blue_color");
          });
          button.innerHTML += '<i class="fa-solid fa-check show_check"></i>';
        } else {
          button.classList.remove("choose_btn");
          spans.forEach(function(span) {
            span.classList.remove("blue_color");
          });
          var checkIcon = button.querySelector(".fa-check");
          if (checkIcon) {
            checkIcon.remove();
          }
        }
    });
    var showContent = document.getElementById("change_currency-content");
    showContent.style.display = "block";
  
    var buttons = showContent.querySelectorAll(".sub-form");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var secondSpan = this.getElementsByTagName("span")[1];
        var selectedValue = secondSpan.textContent;
  
        var liElement = document.getElementById("currency");
        liElement.innerHTML = selectedValue;
        showContent.style.display = "none";
      });
    }
}
function close_table(){
    var hiddenContent = document.getElementsByClassName("change_currency-wrapper");
    for (var i = 0; i < hiddenContent.length; i++) {
        hiddenContent[i].style.display = "none";
      }
}
function question(){
    var url = "https://secure.booking.com/help?";
    window.location.href = url;
}
function check_in(){
    var date_text = document.getElementById("check_in-date");
    date_text.style.display="none";
    var date_table = document.getElementById("check_in-table");
    date_table.style.display="block";
}
function check_out(){
    var date_text = document.getElementById("check_out-date");
    date_text.style.display="none";
    var date_table = document.getElementById("check_out-table");
    date_table.style.display="block";
}
function numer_person() {
  document.getElementById('number_person-control').style.display = 'block';
  // Lấy giá trị từ các span trong number_person-wrapper
  var numberAdult = document.getElementById('number_adult').textContent;
  var numberChildren = document.getElementById('number_children').textContent;
  var numberRoom = document.getElementById('number_room').textContent;

  // Gán giá trị vào các input type="number"
  document.getElementById('number_person-control').querySelectorAll('input')[0].value = parseInt(numberAdult);
  document.getElementById('number_person-control').querySelectorAll('input')[1].value = parseInt(numberChildren);
  document.getElementById('number_person-control').querySelectorAll('input')[2].value = parseInt(numberRoom);
}

// Lắng nghe sự kiện thay đổi giá trị của các input type="number"
document.getElementById('number_person-control').querySelectorAll('input').forEach(function(input) {
  input.addEventListener('change', function() {
    // Lấy giá trị từ các input type="number"
    var numberAdult = document.getElementById('number_person-control').querySelectorAll('input')[0].value;
    var numberChildren = document.getElementById('number_person-control').querySelectorAll('input')[1].value;
    var numberRoom = document.getElementById('number_person-control').querySelectorAll('input')[2].value;

    // Cập nhật giá trị cho các span trong number_person-wrapper
    document.getElementById('number_adult').textContent = numberAdult + ' người lớn';
    document.getElementById('number_children').textContent = numberChildren + ' trẻ em';
    document.getElementById('number_room').textContent = numberRoom + ' phòng';
  });
});

// Ẩn table id="number_person-control" khi ấn vào button id="done"
document.getElementById('done').addEventListener('click', function() {
  document.getElementById('number_person-control').style.display = 'none';
});
function find_local() {
    var destination = document.querySelector(".styled_text.txt_text").value;
    var checkInDate = document.getElementById("check_in-table").value;
    var checkOutDate = document.getElementById("check_out-table").value;
    var adult_number = document.getElementById("number_adult-control").value;
    var children_number = document.getElementById("number_children-control").value;
    var room_number = document.getElementById("number_room-control").value;
    var url = "https://www.booking.com/searchresults.vi.html?ss=" + destination + "&checkin=" + checkInDate + "&checkout=" + checkOutDate + "&group_adults=" + adult_number + "&no_rooms=" + room_number + "&group_children=" + children_number +"&age=0";
    window.location.href = url;
}

var accommodationCategory = document.querySelector('.accommodation-category');
var slider = accommodationCategory.querySelector('.block_wrapper');
var slideIndex = 0;
function slideLeft() {
  var slideMargin = parseInt(getComputedStyle(accommodationCategory.querySelector('.sub-form')).marginRight);
  var slideWidth = accommodationCategory.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider.children.length;
  if (slideIndex === 0) {
    slideIndex = maxSlideIndex - 4;
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  }else if (slideIndex === maxSlideIndex - 4) {
    slideIndex = 0;
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  } else {
    slideIndex++;
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  }
  slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
}
function slideRight() {
  var slideMargin = parseInt(getComputedStyle(accommodationCategory.querySelector('.sub-form')).marginRight);
  var slideWidth = accommodationCategory.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider.children.length - 4;
  if (slideIndex === maxSlideIndex) {
    slideIndex = 0;
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  } else {
    slideIndex++;
    slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  }
}

var vietnam_travel = document.querySelector('.vietnam-travel');
var slider_vntravel = vietnam_travel.querySelector('.block_wrapper');
var slideIndex_vntravel = 0;
function slideLeft_vntravel(){
  var slideMargin = parseInt(getComputedStyle(vietnam_travel.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_vntravel.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_vntravel.children.length;
  if (slideIndex_vntravel === 0) {
    slideIndex_vntravel = maxSlideIndex - 6;
    slider_vntravel.style.transform = 'translateX(' + (-slideWidth * slideIndex_vntravel) + 'px)';
  }else if (slideIndex_vntravel === maxSlideIndex - 6) {
    slideIndex_vntravel = maxSlideIndex - 7;
    slider_vntravel.style.transform = 'translateX(' + (-slideWidth * slideIndex_vntravel) + 'px)';
  } else {
    slideIndex_vntravel--;
    slider_vntravel.style.transform = 'translateX(' + (-slideWidth * slideIndex_vntravel) + 'px)';
  }
}
function slideRight_vntravel() {
  var slideMargin = parseInt(getComputedStyle(vietnam_travel.querySelector('.sub-form')).marginRight);
  var slideWidth = vietnam_travel.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_vntravel.children.length - 6;
  if (slideIndex_vntravel === maxSlideIndex) {
    slideIndex_vntravel = 0;
    slider_vntravel.style.transform = 'translateX(' + (-slideWidth * slideIndex_vntravel) + 'px)';
  } else {
    slideIndex_vntravel++;
    slider_vntravel.style.transform = 'translateX(' + (-slideWidth * slideIndex_vntravel) + 'px)';
  }
}

var topdestination = document.querySelector('.top-destinations');
var slider_topdestination = topdestination.querySelector('.block_wrapper');
var slideIndex_topdestination = 0;
function slideLeft_topdestination(){
  var slideMargin = parseInt(getComputedStyle(slider_topdestination.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_topdestination.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_topdestination.children.length;
  if (slideIndex_topdestination === 0) {
    slideIndex_topdestination = maxSlideIndex - 6;
    slider_topdestination.style.transform = 'translateX(' + (-slideWidth * slideIndex_topdestination) + 'px)';
  }else if (slideIndex_topdestination === maxSlideIndex - 6) {
    slideIndex_topdestination = maxSlideIndex - 7;
    slider_topdestination.style.transform = 'translateX(' + (-slideWidth * slideIndex_topdestination) + 'px)';
  } else {
    slideIndex_topdestination--;
    slider_topdestination.style.transform = 'translateX(' + (-slideWidth * slideIndex_topdestination) + 'px)';
  }
}
function slideRight_topdestination() {
  var slideMargin = parseInt(getComputedStyle(slider_topdestination.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_topdestination.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_topdestination.children.length - 6;
  if (slideIndex_topdestination === maxSlideIndex) {
    slideIndex_topdestination = 0;
    slider_topdestination.style.transform = 'translateX(' + (-slideWidth * slideIndex_topdestination) + 'px)';
  } else {
    slideIndex_topdestination++;
    slider_topdestination.style.transform = 'translateX(' + (-slideWidth * slideIndex_topdestination) + 'px)';
  }
}

function showContent(button) {
  var buttonClass = button.id;
  if(button.id !== "city"){
    var hiddenShift = document.getElementById("slideLeft_topdestination");
    hiddenShift.style.display = "none";
    hiddenShift = document.getElementById("slideRight_topdestination");
    hiddenShift.style.display = "none";
  } else{
    var showShift = document.getElementById("slideLeft_topdestination");
    showShift.style.display = "block";
    showShift = document.getElementById("slideRight_topdestination");
    showShift.style.display = "block"; 
  }
  var contents = document.getElementsByClassName("show-content");
  var isButtonSelected = button.classList.contains("choose-title");
  if (isButtonSelected) {
    return;
  }
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  var contentToShow = document.getElementById(buttonClass+"-content");
  if (contentToShow && contentToShow.style.display !== "flex") {
    contentToShow.style.display = "flex";
  var chooseType = document.querySelector(".top_destinations-title");
  var buttons = chooseType.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("choose-title");
  }
  button.classList.add("choose-title");
}
}
var defaultButton = document.getElementById('city');
defaultButton.classList.add("choose-title");
showContent(defaultButton);
var defaultContentToShow = document.getElementById("city-content");
defaultContentToShow.style.display = "flex";

var uni_accom = document.querySelector('.unique-accommodations');
var slider_uni_accom = uni_accom.querySelector('.block_wrapper');
var slideIndex_uni_accom = 0;
function slideLeft_uni_accom(){
  var slideMargin = parseInt(getComputedStyle(slider_uni_accom.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_uni_accom.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_uni_accom.children.length;
  if (slideIndex_uni_accom === 0) {
    slideIndex_uni_accom = maxSlideIndex - 4;
    slider_uni_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_uni_accom) + 'px)';
  }else if (slideIndex_uni_accom === maxSlideIndex - 4) {
    slideIndex_uni_accom = maxSlideIndex - 5;
    slider_uni_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_uni_accom) + 'px)';
  } else {
    slideIndex_uni_accom--;
    slider_uni_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_uni_accom) + 'px)';
  }
}
function slideRight_uni_accom() {
  var slideMargin = parseInt(getComputedStyle(slider_uni_accom.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_uni_accom.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_uni_accom.children.length - 4;
  if (slideIndex_uni_accom === maxSlideIndex) {
    slideIndex_uni_accom = 0;
    slider_uni_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_uni_accom) + 'px)';
  } else {
    slideIndex_uni_accom++;
    slider_uni_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_uni_accom) + 'px)';
  }
}

var favor_accom = document.querySelector('.favorite-accommodations');
var slider_favor_accom = favor_accom.querySelector('.block_wrapper');
var slideIndex_favor_accom = 0;
function slideLeft_favor_accom(){
  var slideMargin = parseInt(getComputedStyle(slider_favor_accom.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_favor_accom.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_favor_accom.children.length;
  if (slideIndex_favor_accom === 0) {
    slideIndex_favor_accom = maxSlideIndex - 4;
    slider_favor_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_favor_accom) + 'px)';
  }else if (slideIndex_favor_accom === maxSlideIndex - 4) {
    slideIndex_favor_accom = maxSlideIndex - 5;
    slider_favor_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_favor_accom) + 'px)';
  } else {
    slideIndex_favor_accom--;
    slider_favor_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_favor_accom) + 'px)';
  }
}
function slideRight_favor_accom() {
  var slideMargin = parseInt(getComputedStyle(slider_favor_accom.querySelector('.sub-form')).marginRight);
  var slideWidth = slider_favor_accom.querySelector('.sub-form').offsetWidth + slideMargin;
  var maxSlideIndex = slider_favor_accom.children.length - 4;
  if (slideIndex_favor_accom === maxSlideIndex) {
    slideIndex_favor_accom = 0;
    slider_favor_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_favor_accom) + 'px)';
  } else {
    slideIndex_favor_accom++;
    slider_favor_accom.style.transform = 'translateX(' + (-slideWidth * slideIndex_favor_accom) + 'px)';
  }
}

var wordList = document.getElementById('wordList');
var words = Array.from(wordList.getElementsByTagName('li'));
var currentIndex = 0;

function showNextWord() {
  words[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % words.length;
  words[currentIndex].classList.add('active');
}

// Hiển thị từ đầu tiên
words[currentIndex].classList.add('active');

// Tự động chuyển đổi từ sau mỗi khoảng thời gian
setInterval(showNextWord, 2000);

function showContent_favor(button) {
  var buttonId = button.id;
  var favorite_recommends = document.querySelector('.favorite-recommends');
  var contents = favorite_recommends.querySelectorAll('.locations');
  var isButtonSelected = button.classList.contains("choose-title");
  if (isButtonSelected) {
    return;
  }
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  var contentToShow = document.getElementById(buttonId+"-content");
  console.log(contentToShow);
  if (contentToShow && contentToShow.style.display !== "flex") {
    contentToShow.style.display = "flex";
  var chooseType = document.querySelector(".favorite-recommends");
  var buttons = chooseType.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("choose-title");
  }
  button.classList.add("choose-title");
}
}
var defaultButton_favor = document.getElementById('area_favor');
defaultButton_favor.classList.add("choose-title");
// showContent_favor(defaultButton_favor);
var defaultContentToShow_favor = document.getElementById("area_favor-content");
defaultContentToShow_favor.style.display = "flex";

var slides = document.querySelectorAll('.promotion_wrapper .flex-container > div');
var currentSlide = 0;
hideAllSlides(); // Ẩn tất cả các khối ban đầu
showNextSlide(); 
function hideAllSlides() {
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
}
function showNextSlide() {
  hideAllSlides();
  currentSlide = (currentSlide + 1) % slides.length;
  currentSlide_2 = (currentSlide + 2) % slides.length;
  slides[currentSlide].style.display = 'flex';
  slides[currentSlide_2].style.display = 'flex';
}
setInterval(showNextSlide, 3200); // Chuyển slide sau mỗi 3 giây
