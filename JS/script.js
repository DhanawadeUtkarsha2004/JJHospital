var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    window.open('page2.html', '_blank');

  });
});


const reviewForm = document.getElementById('review-form');
const reviewDisplay = document.getElementById('review-display');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const reviewHTML = `<p><strong>${name}</strong>: ${review}</p>`;
    reviewDisplay.innerHTML += reviewHTML;
    reviewForm.reset();
});