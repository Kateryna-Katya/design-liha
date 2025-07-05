document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.7895 15.3235C26.3572 15.3237 26.903 15.4808 27.3138 15.7623C27.7247 16.0438 27.9691 16.428 27.9964 16.8354C28.0236 17.2428 27.8317 17.6422 27.4604 17.9507C27.089 18.2592 26.5667 18.4532 26.0017 18.4926L25.7895 18.5H2.21053C1.64284 18.4998 1.09702 18.3427 0.686167 18.0612C0.275316 17.7797 0.0309296 17.3955 0.00364846 16.9881C-0.0236327 16.5807 0.168283 16.1814 0.539627 15.8728C0.910971 15.5643 1.43328 15.3703 1.99832 15.3309L2.21053 15.3235H25.7895ZM25.7895 7.91177C26.3757 7.91177 26.938 8.0791 27.3526 8.37695C27.7671 8.6748 28 9.07877 28 9.5C28 9.92123 27.7671 10.3252 27.3526 10.6231C26.938 10.9209 26.3757 11.0882 25.7895 11.0882H2.21053C1.62426 11.0882 1.062 10.9209 0.647448 10.6231C0.232894 10.3252 0 9.92123 0 9.5C0 9.07877 0.232894 8.6748 0.647448 8.37695C1.062 8.0791 1.62426 7.91177 2.21053 7.91177H25.7895ZM25.7895 0.5C26.3757 0.5 26.938 0.667332 27.3526 0.965183C27.7671 1.26304 28 1.66701 28 2.08824C28 2.50946 27.7671 2.91344 27.3526 3.21129C26.938 3.50914 26.3757 3.67647 25.7895 3.67647H2.21053C1.62426 3.67647 1.062 3.50914 0.647448 3.21129C0.232894 2.91344 0 2.50946 0 2.08824C0 1.66701 0.232894 1.26304 0.647448 0.965183C1.062 0.667332 1.62426 0.5 2.21053 0.5H25.7895Z" fill="#7BCE60" />
</svg>
    `;
  
    const crossIcon = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.66667 6.66669L16 16M16 16L25.3333 6.66669M16 16L6.66667 25.3334M16 16L25.3333 25.3334" stroke="#F8F5F2" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });