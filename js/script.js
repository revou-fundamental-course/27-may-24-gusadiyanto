const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Add navigation buttons
const prevButton = document.createElement('button');
prevButton.classList.add('prev');

prevButton.addEventListener('click', prevSlide);

const nextButton = document.createElement('button');
nextButton.classList.add('next');

nextButton.addEventListener('click', nextSlide);

// Append buttons to the image slider container
const imageSlider = document.querySelector('.image-slider');
imageSlider.appendChild(prevButton);
imageSlider.appendChild(nextButton);

// Auto slide every 3 seconds
let autoSlideInterval = setInterval(nextSlide, 3000);

// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload
  // Get form data
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;
  // Process the form data (example: display it in the "info" div)
  const infoDiv = document.querySelector(".info");
  infoDiv.innerHTML = `
      <p><b>Nama:</b> ${name}</p>
      <p><b>Tanggal Lahir:</b> ${dob}</p>
      <p><b>Jenis Kelamin:</b> ${gender}</p>
      <p><b>Pesan:</b> ${message}</p>
  `;
  return false; // Prevent traditional form submission
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  // Check if all required fields are filled
  if (document.getElementById("name").value === "" ||
      document.getElementById("dob").value === "" ||
      !document.querySelector('input[name="gender"]:checked') ||
      document.getElementById("message").value === "") {
      alert("Please fill in all required fields.");
      return false; // Prevent form submission
  }
  // If all fields are filled, you can proceed with form processing here
  // ... (Your existing code to handle form data)
  return false; // Prevent traditional form submission
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload
  // Get form data
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value;
  
  // Get current time
  const currentTime = new Date().toLocaleString(); // Formats time based on user's locale
  
  // Update the .info div with the submitted data
  const infoDiv = document.querySelector(".info");
  infoDiv.innerHTML = `
      <p><b>Tgl/Jam &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> ${currentTime}</p><br>
      <p><b>Nama &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> ${name}</p>
      <p><b>Tanggal Lahir &nbsp;:</b> ${dob}</p>
      <p><b>Jenis Kelamin :</b> ${gender}</p>
      <p><b>Pesan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> ${message}</p>
  `;
  return false; // Prevent traditional form submission
}

// Get the button:
let mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"; // Show the button
  } else {
    mybutton.style.display = "none"; // Hide the button
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}