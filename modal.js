// Get the modal element and the button that opens it
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalButton');
var closeBtn = document.getElementsByClassName('close')[0];

// When the button is clicked, display the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
