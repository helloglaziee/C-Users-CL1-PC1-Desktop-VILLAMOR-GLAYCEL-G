// Handle contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  this.reset();
});

// Handle comments
document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('commentName').value;
  const comment = document.getElementById('commentText').value;

  const commentBox = document.createElement('div');
  commentBox.classList.add('comment');
  commentBox.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

  document.getElementById('commentList').appendChild(commentBox);

  this.reset();
});
