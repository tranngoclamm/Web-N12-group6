const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  const questionText = question.querySelector('.question-text');
  const answer = question.querySelector('.answer');
  questionText.addEventListener('click', () => {
    answer.classList.toggle('show-answer'); // Thêm/xóa lớp CSS 'show-answer'
  });
});
function showContent(button) {
  var buttonClass = button.className;
  var contents = document.getElementsByClassName("show_type");
  var isButtonSelected = button.classList.contains("choose-button");
  if (isButtonSelected) {
    return;
  }
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  var contentToShow = document.getElementById("content_for-" + buttonClass);
  if (contentToShow && contentToShow.style.display !== "flex") {
    contentToShow.style.display = "flex";
  } else if(buttonClass == "all-type"){
    contentToShow = document.getElementById("content_for-small-type");
    contentToShow.style.display = "flex";
    contentToShow = document.getElementById("content_for-medium-type");
    contentToShow.style.display = "flex";
  }
  var chooseType = document.querySelector(".choose_type");
  var buttons = chooseType.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("choose-button");
  }
  button.classList.add("choose-button");
}
var defaultButton = document.querySelector(".choose_type .small-type");
defaultButton.classList.add("choose-button");
showContent(defaultButton);
var defaultContentToShow = document.getElementById("content_for-small-type");
defaultContentToShow.style.display = "flex";