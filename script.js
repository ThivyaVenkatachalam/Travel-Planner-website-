document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1200 });
  } else {
    console.error("AOS library not loaded.");
  }

  if (typeof Swiper !== "undefined") {
    new Swiper('.testimonial-slider', {
      loop: true,
      autoplay: { delay: 5000 },
      effect: 'fade',
      fadeEffect: { crossFade: true },
    });
  } else {
    console.error("Swiper not loaded.");
  }
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      const formMessage = document.getElementById('formMessage');
      if (!name || !email || !message) {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
      formMessage.style.color = "rgb(68, 151, 219)";
      this.reset();
    });
  }
  const form = document.getElementById("tripForm");
  const tripCard = document.getElementById("tripCard");

  if (form && tripCard) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const destination = document.getElementById("destination").value.trim();
      const budget = document.getElementById("budget").value.trim();
      const days = document.getElementById("days").value.trim();

      if (!destination || !budget || !days) return;

      const tips = [
        "Book in advance for better deals!",
        "Explore local markets!",
        "Pack light and smart.",
        "Always carry sunscreen and water.",
        "Use public transport to save money."
      ];

      const randomTip = tips[Math.floor(Math.random() * tips.length)];

      tripCard.innerHTML = `
        <h3>Destination: ${destination}</h3>
        <p><strong>Budget:</strong> ₹${budget}</p>
        <p><strong>Duration:</strong> ${days} days</p>
        <p><strong>Travel Tip:</strong> ${randomTip}</p>
      `;

      tripCard.classList.remove("hidden");
    });
  }
});
