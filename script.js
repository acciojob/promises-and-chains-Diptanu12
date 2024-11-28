
document.getElementById('userForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value.trim();
  const ageInput = document.getElementById('age').value.trim();

  if (!nameInput || !ageInput) {
    alert('Please fill out all fields.');
    return;
  }

  const age = parseInt(ageInput, 10);

  const validateAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${nameInput}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput}. You aren't old enough.`);
      }
    }, 4000); 
  });

  validateAge
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});
