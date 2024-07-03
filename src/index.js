export default function createCarousel(container, images) {
    let currentSlide = 0;
    
    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    
    images.forEach((src, index) => {
      const slide = document.createElement('div');
      slide.className = 'slide';
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Image ${index + 1}`;
      slide.appendChild(img);
      carousel.appendChild(slide);
    });
    
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-button prev';
    prevButton.innerHTML = '&#9664;';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.innerHTML = '&#9654;';
    
    const dots = document.createElement('div');
    dots.className = 'carousel-dots';
    
    images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.dataset.slide = index;
      dots.appendChild(dot);
    });
    
    container.appendChild(carousel);
    container.appendChild(prevButton);
    container.appendChild(nextButton);
    container.appendChild(dots);
    
    const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    };
    
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % images.length;
      updateCarousel();
    };
    
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + images.length) % images.length;
      updateCarousel();
    };
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });
    
    setInterval(nextSlide, 5000);
    
    updateCarousel();
  }
  