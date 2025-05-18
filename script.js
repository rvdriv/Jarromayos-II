new Swiper('.card-wrapper', {
  
    loop: true,
    spaceBetween: 30,
  

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        
        0: {

            slidesPerView: 1
        },

        768: {

            slidesPerView: 2
        },

        1024: {

            slidesPerView: 3
        },

    }

  });


  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.arrow');
      content.classList.toggle('open');
      arrow.classList.toggle('rotate');
    });
  });


   const menuScroll = document.getElementById('menu-scroll');

  window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;
    const newTop = Math.max(400 - scrollY, 300);

    menuScroll.style.top = newTop + 'px';
  });


  
   const toggle = document.getElementById('toggle-menu-btn');

  window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;
    const newTop = Math.max(300 - scrollY, 200);

    toggle.style.top = newTop + 'px';
  });






  const toggleBtn = document.getElementById('toggle-menu-btn');
  const menu = document.getElementById('menu-scroll');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

