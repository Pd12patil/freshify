function increment(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  counter.innerText = ++ currentValue;
}

function decrement(counterId) {
  var counter = document.getElementById(counterId);
  var currentValue = parseInt(counter.innerText);
  if (currentValue>0) {
    counter.innerText = --currentValue;
    alert("one item remove successfully" );
  }

}

function openModel() {
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'flex';
}

function closeModel() {
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = 'none';
}

function okButton() {
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.visibility = 'none';
}