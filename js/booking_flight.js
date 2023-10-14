var buttons = document.querySelectorAll('button');
var local_to = document.getElementById("local_to").value;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openLink);
}

function openLink(event) {
  var button = event.target;
  var buttonIndex = Array.from(buttons).indexOf(button);
  
  switch (buttonIndex) {
    case 0:
      window.open('https://flights-vn.gotogate.com/rf/start', '_blank');
      break;
    case 1:
      window.open('https://flights-vn.gotogate.com/rf/contact-us', '_blank');
      break;
    case 2:
      window.open('https://flights-vn.gotogate.com/faq-support/vi-VN', '_blank');
      break;
    case 3:
      window.open('https://www.booking.com/booking-home/index.vi.html?', '_blank');
      break;
    case 4:
      window.open('https://www.agoda.com/vi-vn/search?&arrivalToText=' + local_to , '_blank');
      break;
    default:
      break;
  }
}
