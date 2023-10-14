function find_local() {
    var destination = document.getElementById("local").value;
    var checkInDate = document.getElementById("date_to").value;
    var checkOutDate = document.getElementById("date_from").value;
    var adult_number = document.getElementById("number_passenger").value;
    var room_number = document.getElementById("number_room").value;
    var url = "https://www.booking.com/searchresults.vi.html?ss=" + destination + "&checkin=" + checkInDate + "&checkout=" + checkOutDate + "&group_adults=" + adult_number + "&no_rooms=" + room_number;
    window.location.href = url;
}
document.getElementById('to').onclick = function() {
    this.style.display = 'none';
    document.getElementById('date_to').style.display = 'block';
};
document.getElementById('from').onclick = function() {
    this.style.display = 'none';
    document.getElementById('date_from').style.display = 'block';
};
document.getElementById('passenger').onclick = function() {
    this.style.display = 'none';
    document.getElementById('number_text').style.display = 'block';
    document.getElementById('number_passenger').style.display = 'block';
};
document.getElementById('room').onclick = function() {
    this.style.display = 'none';
    document.getElementById('room_text').style.display = 'block';
    document.getElementById('number_room').style.display = 'block';
};
