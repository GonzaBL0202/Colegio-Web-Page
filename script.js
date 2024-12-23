document.querySelector('.prev').addEventListener('click', function() {
    let carousel = document.querySelector('.carousel-images');
    carousel.style.transform = 'translateX(-100%)'; // Slide to the left
  });
  
  document.querySelector('.next').addEventListener('click', function() {
    let carousel = document.querySelector('.carousel-images');
    carousel.style.transform = 'translateX(0)'; // Slide back to the first image
  });

  const more = document.getElementById("more");
  const getBtn = document.querySelector('.get-btn');

  document.querySelectorAll('.get-btn').forEach(button => {
    button.addEventListener('click', function () {
      const moreContent = this.closest('.materias-plan').querySelector('.more-content');
      if (moreContent.hasAttribute('hidden')) {
        moreContent.removeAttribute('hidden');
        this.textContent = "Ver menos";
      } else {
        moreContent.setAttribute('hidden', '');
        this.textContent = "Ver más";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
  
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  });
  

