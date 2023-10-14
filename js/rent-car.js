const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  const questionText = question.querySelector('.question-text');
  const answer = question.querySelector('.answer');
  questionText.addEventListener('click', () => {
    answer.classList.toggle('show-answer'); 
  });
});
document.getElementById('date_to').onclick = function() {
  this.style.display = 'none';
  document.getElementById('choose_date_to').style.display = 'block';
};
document.getElementById('date_from').onclick = function() {
  this.style.display = 'none';
  document.getElementById('choose_date_from').style.display = 'block';
};
document.getElementById('time_to').onclick = function() {
  this.style.display = 'none';
  document.getElementById('time_select_to').style.display = 'block';
};
document.getElementById('time_from').onclick = function() {
  this.style.display = 'none';
  document.getElementById('time_select_from').style.display = 'block';
};

function find_local() {
  var destination = document.getElementById("local_to").value;
  var checkInDate = document.getElementById("choose_date_to").value;
  var checkOutDate = document.getElementById("choose_date_from").value;
  var url = "https://www.booking.com/searchresults.vi.html?ss=" + destination + "&checkin=" + checkInDate + "&checkout=" + checkOutDate + "&group_adults=4" + "&no_rooms=2"+ "&group_children=0" +"&age=0";
  window.location.href = url;
}