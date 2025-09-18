// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Contact form (demo only)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(!name || !email || !message){
    alert('Please fill all fields.');
    return;
  }

  const messages = JSON.parse(localStorage.getItem('messages') || '[]');
  messages.push({ name, email, message, time: new Date().toISOString() });
  localStorage.setItem('messages', JSON.stringify(messages));

  alert(`Thank you ${name}! Your message is saved (demo).`);
  form.reset();
});

// Resume download
document.getElementById('downloadResume').addEventListener('click', function(){
  const resumeText = `Utsav Kumar
Aspiring Software Developer
Skills: C++, DSA, HTML, CSS, JS, Git
Email: utsavkumartbj@gmail.com`;
  const blob = new Blob([resumeText], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Utsav_Kumar_Resume.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// Clear form
document.getElementById('clearBtn').addEventListener('click', function(){
  if(confirm('Clear the form?')) form.reset();
});
