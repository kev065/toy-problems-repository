const form = document.querySelector('form');
const speedInput = document.querySelector('#speed');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the speed value
  const speed = Number(speedInput.value);

  // Validate the speed value
  if (isNaN(speed)) {
    alert('Please enter a valid speed value.');
    return;
  }

  // Calculate the demerit points
  const demeritPoints = Math.floor((speed - 70) / 5);

  // Display the results
  if (speed < 70) {
    alert('Ok');
  } else if (demeritPoints >= 12) {
    alert('License suspended');
  } else {
    alert(`Demerit points: ${demeritPoints}`);
  }
});