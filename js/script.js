// Main JavaScript file for CBL Digital Solution Portfolio

document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll behavior
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById("contactForm");

  //if (contactForm) {
  //contactForm.addEventListener('submit', function(e) //{
  //e.preventDefault();//

  // Get form values
  // const name = document.getElementById('name').value;
  //const email = document.getElementById('email').value;
  //const message = document.getElementById('message').value;

  // Basic form validation
  //if (!name || !email || !message) {
  // alert('Please fill in all fields');
  // return;//
  //}//

  // Email validation
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(email)) {
  // alert('Please enter a valid email address');
  // return;
  // }//

  // In a real application, you would send this data to a server
  // For this demo, we'll just show a success message
  // alert('Thank you for your message! I will get back to you soon.');
  //contactForm.reset();//
  // });//
  // }//

  // Create images folder and placeholder images
  // Note: In a real implementation, you would replace these with actual images
  console.log("Portfolio website loaded successfully!");
});
