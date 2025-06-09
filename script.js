// Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const popup = document.getElementById('popup');
    
    hamburger.addEventListener('click', () => {
      popup.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!popup.contains(e.target) {
        popup.classList.add('hidden');
      }
    });
    
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