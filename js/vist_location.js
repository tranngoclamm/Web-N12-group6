function choose_language() {
    var showContent = document.getElementById("change_language-content");
    showContent.style.display = "block";
  
    var buttons = showContent.querySelectorAll(".sub-form");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var imgSrc = this.querySelector("img").src;
  
        var flagButton = document.getElementById("flag");
        var flag_footerButton = document.getElementById("language_footer");
        flagButton.querySelector("img").src = imgSrc;
        flag_footerButton.querySelector("img").src = imgSrc;
        showContent.style.display = "none";
      });
    }
  }
function choose_currency() {
    var showContent = document.getElementById("change_currency-content");
    showContent.style.display = "block";
  
    var buttons = showContent.querySelectorAll(".sub-form");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var secondSpan = this.getElementsByTagName("span")[1];
        var selectedValue = secondSpan.textContent;
  
        var liElement = document.getElementById("currency");
        var ftElement = document.getElementById("currency_footer");
        liElement.innerHTML = selectedValue;
        ftElement.innerHTML = selectedValue;
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
function pick_date(){
    var date_text = document.getElementById("date_text");
    date_text.style.display="none";
    var date_table = document.getElementById("date_table");
    date_table.style.display="block";
}
function find_local() {
    var destination = document.querySelector(".styled_text.txt_text").value;
    var date = document.getElementById("date_table").value;
    var url = "https://www.booking.com/attractions/searchresults/vn/" + destination + ".html?&start_date=" + date + "&source=search_box";
    window.location.href = url;
  }
function showContent(button) {
  var buttonClass = button.className;
  var contents = document.getElementsByClassName("show-content");
  var isButtonSelected = button.classList.contains("choose-btn");
  if (isButtonSelected) {
    return;
  }
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  var contentToShow = document.getElementById("content" + buttonClass);
  if (contentToShow && contentToShow.style.display !== "flex") {
    contentToShow.style.display = "flex";
  var chooseType = document.querySelector(".list-location");
  var buttons = chooseType.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("choose-btn");
  }
  button.classList.add("choose-btn");
}
}
var defaultButton = document.getElementsByClassName("1")[0];
defaultButton.classList.add("choose-btn");
showContent(defaultButton);
var defaultContentToShow = document.getElementById("content1");
defaultContentToShow.style.display = "flex";