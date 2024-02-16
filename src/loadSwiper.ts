window.fsAttributes = window.fsAttributes || [];

window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
    // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
    const [listInstance] = listInstances;
    ///initializing the swiper instance after cms load
    initializeOrUpdateSwipers();
  },
]);

function initializeOrUpdateSwipers() {
  // Add classes to swiper containers, buttons, and pagination
  const s = document.querySelectorAll('.multi_img--fileds.swiper');
  s.forEach(function (ele, i) {
    ele.classList.add(`swiper-${i}`);
  });

  // Add classes to next button
  const y = document.querySelectorAll('.swiper-btn.next');
  y.forEach(function (ele, i) {
    ele.classList.add(`slider-next-${i}`);
  });

  const z = document.querySelectorAll('.swiper-btn.prev');
  z.forEach(function (ele, i) {
    ele.classList.add(`slider-prev-${i}`);
  });

  // Add class to each pagination
  const x = document.querySelectorAll('.pagin-wrap');
  x.forEach(function (ele, i) {
    ele.classList.add(`pagination-${i}`);
  });
  // ... (Your existing code to add classes)

  // Get all Swiper elements
  const swipers = document.querySelectorAll('.multi_img--fileds.swiper');

  // Loop through each Swiper element and initialize or update
  swipers.forEach(function (swiper, index) {
    if (swiper.swiper) {
      // If Swiper instance already exists, update it
      swiper.swiper.update();
    } else {
      // Initialize Swiper with navigation
      new Swiper(swiper, {
        // Add your Swiper options here
        slidesPerView: 1,
        pagination: {
          el: `.pagination-${index}`,
        },
        navigation: {
          nextEl: `.slider-next-${index}`,
          prevEl: `.slider-prev-${index}`,
        },
      });
    }
  });
}
