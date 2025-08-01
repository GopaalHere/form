const form = document.getElementById('userForm');
const inputs = form.querySelectorAll('input');
const message = document.getElementById('message');

// Move to next field on Enter key
inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      } else {
        form.requestSubmit();
      }
    }
  });
});

// Submit form
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    dob:document.getElementById('dob').value,
    address: document.getElementById('address').value,
    email: document.getElementById('email').value,
    sex: document.getElementById('sex').value,
  };

  try {
    const res = await fetch('https://form-api-do2a.onrender.com/api/add-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    message.textContent = result.message;
    form.reset();
    inputs[0].focus();
  } catch (err) {
    message.textContent = "Error saving user";
    message.style.color = "red";
  }
});
