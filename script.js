// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const popup = document.getElementById('popup');

// Toggle menu saat tombol diklik
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // 🔥 Cegah event bubbling
  popup.classList.toggle('hidden');
});

// Tutup menu saat klik di luar
document.addEventListener('click', (e) => {
  const isClickInside = popup.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInside) {
    popup.classList.add('hidden');
  }
})
    
    // Scroll to top functionality
    const scrollTopButton = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('active');
      } else {
        scrollTopButton.classList.remove('active');
      }
    });
    
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Add animation classes on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.9) {
          element.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
      });
    };
    
    // Initial check on page load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    document.addEventListener('DOMContentLoaded', () => {
  const marqueeContent = document.getElementById('marquee-content');
  
  if (marqueeContent) {
    // Ambil semua item asli
    const originalItems = Array.from(marqueeContent.children);
    
    // Duplikasi semua item untuk menciptakan loop yang mulus
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      marqueeContent.appendChild(clone);
    });
  }
});
