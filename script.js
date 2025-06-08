//  Toggle a popup menu when clicking on a hamburger icon
 const hamburger = document.getElementById('hamburger');
  const popup = document.getElementById('popup');

  hamburger.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !hamburger.contains(e.target)) {
      popup.classList.add('hidden');
    }
  })