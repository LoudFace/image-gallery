// import Swiper from 'swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const filterResultWrap = document.getElementById('filterResult');
  const allLabel = [...document.querySelectorAll('label')];

  const checkStatus = function () {
    const clickedState = allLabel.filter((label) => {
      return label.classList.contains('fs-cmsfilter_active');
    });
    console.log(clickedState);

    if (clickedState.length > 0) {
      filterResultWrap.style.display = 'flex';
    } else {
      filterResultWrap.style.display = 'none';
    }
  };

  allLabel.forEach((label) => {
    label.addEventListener('change', checkStatus);
  });

  const nobaEl = document.querySelector('[area-code="noba"]');
  const ukiEl = document.querySelector('[area-code="uki"]');
  const ceseEl = document.querySelector('[area-code="cese"]');
  const eerutEl = document.querySelector('[area-code="eerut"]');
  const meaEl = document.querySelector('[area-code="mea"]');
  const inEl = document.querySelector('[area-code="in"]');
  const chinaArea = document.querySelector('[area-code="cn"]');
  const seapEl = document.querySelector('[area-code="seap"]');

  const countryFitler = [...document.querySelectorAll('.area-filter.country')];

  const filterStateCountry = document.getElementById('filterState');
  const defaultCountryState = document.getElementById('defaultCountry');
  const filterStateWrap = document.getElementById('filterState');

  const countryCode = [...document.querySelectorAll('[area-country]')];
  // eslint-disable-next-line prefer-const
  let nobaClicked = true;
  let ukiClicked = true;
  let ceseClicked = true;
  let eerutClicked = true;
  let meaClicked = true;
  let inClicked = true;
  let chinaClicked = true;
  let seapClicked = true;

  nobaEl.addEventListener('click', nobaFunction);
  ukiEl.addEventListener('click', ukifunction);
  ceseEl.addEventListener('click', ceseFunction);
  eerutEl.addEventListener('click', eerutFunction);
  meaEl.addEventListener('click', meaFunction);
  inEl?.addEventListener('click', inFunction);
  chinaArea?.addEventListener('click', chinaFunction);
  seapEl?.addEventListener('click', seapFunction);

  const checkActiveState = function () {
    const checkClass = countryCode.filter((el) => el.classList.contains('active-country'));
    console.log(checkClass);

    if (checkClass.length > 0) {
      defaultCountryState.style.display = `none`;
      filterStateWrap.style.display = `block`;
    } else {
      defaultCountryState.style.display = `flex`;
      filterStateWrap.style.display = `none`;
    }
  };

  function inFunction() {
    const activeArea = this.getAttribute('area-code');
    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (inClicked) {
      activeCountry.forEach((country) => {
        country.classList.add('active-country');
      });
      inClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el.classList.remove('active-country');
      });
      inClicked = true;
    }
    checkActiveState();
  }

  function chinaFunction() {
    const activeArea = this.getAttribute('area-code');
    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (chinaClicked) {
      activeCountry.forEach((country) => {
        country.classList.add('active-country');
      });
      chinaClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el.classList.remove('active-country');
      });
      chinaClicked = true;
    }
    checkActiveState();
  }

  function seapFunction() {
    const activeArea = this.getAttribute('area-code');
    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (seapClicked) {
      activeCountry.forEach((country) => {
        country.classList.add('active-country');
      });
      seapClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el.classList.remove('active-country');
      });
      seapClicked = true;
    }
    checkActiveState();
  }

  function ceseFunction() {
    const activeArea = this.getAttribute('area-code');
    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (ceseClicked) {
      activeCountry.forEach((country) => {
        country.classList.add('active-country');
      });
      ceseClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el.classList.remove('active-country');
      });
      ceseClicked = true;
    }
    checkActiveState();
  }

  function meaFunction() {
    const activeArea = this.getAttribute('area-code');
    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );
    if (meaClicked) {
      activeCountry.forEach((country) => {
        country?.classList.add('active-country');
      });
      meaClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el.classList.remove('active-country');
      });
      meaClicked = true;
    }
    checkActiveState();
  }

  function eerutFunction() {
    if (eerutClicked) {
      const activeArea = this.getAttribute('area-code');

      const activeCountry = countryCode.filter(
        (el) => el.getAttribute('area-country') === activeArea
      );

      activeCountry.forEach((country) => {
        country?.classList.add('active-country');
      });

      eerutClicked = false;
    } else {
      const activeArea = this.getAttribute('area-code');
      const activeCountry = countryCode.filter(
        (el) => el.getAttribute('area-country') === activeArea
      );
      activeCountry.forEach((el) => {
        el?.classList.remove('active-country');
      });
      eerutClicked = true;
    }
    checkActiveState();
  }

  function nobaFunction() {
    const activeArea = this.getAttribute('area-code');
    console.log(activeArea);

    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (nobaClicked) {
      activeCountry.forEach((country) => {
        country?.classList.add('active-country');
      });

      nobaClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el?.classList.remove('active-country');
      });

      nobaClicked = true;
    }
    checkActiveState();
  }

  function ukifunction() {
    const activeArea = this.getAttribute('area-code');

    const activeCountry = countryCode.filter(
      (el) => el.getAttribute('area-country') === activeArea
    );

    if (ukiClicked) {
      // active countries
      activeCountry.forEach((country) => {
        country?.classList.add('active-country');
      });

      ukiClicked = false;
    } else {
      activeCountry.forEach((el) => {
        el?.classList.remove('active-country');
      });
      //unactive Countries
      ukiClicked = true;
    }
    checkActiveState();
  }

  // const nobaEl = document.querySelector('[area-code="noba"]') as HTMLElement;
  // const ukiEl = document.querySelector('[area-code="uki"]') as HTMLElement;
  // const ceseEl = document.querySelector('[area-code="cese"]') as HTMLElement;
  // const eerutEl = document.querySelector('[area-code="eerut"]') as HTMLElement;
  // const meaEl = document.querySelector('[area-code="mea"]') as HTMLElement;
  // const countryFitler = [...document.querySelectorAll('.area-filter.country')];

  // const filterStateCountry = document.getElementById('filterState');
  // const defaultCountryState = document.getElementById('defaultCountry') as HTMLLIElement;

  // console.log(defaultCountryState, filterStateCountry);

  // const countryCode = [...document.querySelectorAll('[area-country]')];
  // // eslint-disable-next-line prefer-const
  // let nobaClicked = true;
  // let ukiClicked = true;
  // let ceseClicked = true;
  // let eerutClicked = true;
  // let meaClicked = true;

  // nobaEl.addEventListener('click', nobaFunction);
  // ukiEl.addEventListener('click', ukifunction);
  // ceseEl.addEventListener('click', ceseFunction);
  // eerutEl.addEventListener('click', eerutFunction);
  // meaEl.addEventListener('click', meaFunction);

  // /////
  // ///////
  // const checkActiveState = function () {
  //   const checkClass = countryCode.filter((el) => el.classList.contains('active-country'));
  //   console.log(checkClass);

  //   if (checkClass.length > 0) {
  //     defaultCountryState.style.display = `none`;
  //   } else {
  //     defaultCountryState.style.display = `flex`;
  //   }
  // };

  // function ceseFunction() {
  //   const activeArea = this.getAttribute('area-code');
  //   const activeCountry = countryCode.filter(
  //     (el) => el.getAttribute('area-country') === activeArea
  //   );

  //   if (ceseClicked) {
  //     activeCountry.forEach((country) => {
  //       country.classList.add('active-country');
  //     });
  //     ceseClicked = false;
  //   } else {
  //     activeCountry.forEach((el) => {
  //       el.classList.remove('active-country');
  //     });
  //     ceseClicked = true;
  //   }
  //   checkActiveState();
  // }

  // function meaFunction() {
  //   const activeArea = this.getAttribute('area-code');

  //   const activeCountry = countryCode.filter(
  //     (el) => el.getAttribute('area-country') === activeArea
  //   );

  //   if (meaClicked) {
  //     activeCountry.forEach((country) => {
  //       country?.classList.add('active-country');
  //     });
  //     meaClicked = false;
  //   } else {
  //     activeCountry.forEach((el) => {
  //       el.classList.remove('active-country');
  //     });
  //     meaClicked = true;
  //   }
  //   checkActiveState();
  // }

  // function eerutFunction() {
  //   if (eerutClicked) {
  //     const activeArea = this.getAttribute('area-code');

  //     const activeCountry = countryCode.filter(
  //       (el) => el.getAttribute('area-country') === activeArea
  //     );

  //     activeCountry.forEach((country) => {
  //       country?.classList.add('active-country');
  //     });

  //     eerutClicked = false;
  //   } else {
  //     const activeArea = this.getAttribute('area-code');
  //     const activeCountry = countryCode.filter(
  //       (el) => el.getAttribute('area-country') === activeArea
  //     );
  //     activeCountry.forEach((el) => {
  //       el?.classList.remove('active-country');
  //     });
  //     eerutClicked = true;
  //   }
  //   checkActiveState();
  // }

  // function nobaFunction() {
  //   const activeArea = this.getAttribute('area-code');
  //   console.log(activeArea);

  //   const activeCountry = countryCode.filter(
  //     (el) => el.getAttribute('area-country') === activeArea
  //   );

  //   if (nobaClicked) {
  //     activeCountry.forEach((country) => {
  //       country?.classList.add('active-country');
  //     });

  //     nobaClicked = false;
  //   } else {
  //     activeCountry.forEach((el) => {
  //       el?.classList.remove('active-country');
  //     });

  //     nobaClicked = true;
  //   }
  //   checkActiveState();
  // }

  // function ukifunction() {
  //   const activeArea = this.getAttribute('area-code');

  //   const activeCountry = countryCode.filter(
  //     (el) => el.getAttribute('area-country') === activeArea
  //   );

  //   if (ukiClicked) {
  //     // active countries
  //     activeCountry.forEach((country) => {
  //       country?.classList.add('active-country');
  //     });

  //     ukiClicked = false;
  //   } else {
  //     activeCountry.forEach((el) => {
  //       el?.classList.remove('active-country');
  //     });
  //     //unactive Countries
  //     ukiClicked = true;
  //   }
  //   checkActiveState();
  // }

  // ukiCode.addEventListener('click', function () {
  //   countFilterFunction2(ukiCode);
  // });

  // nobaCode.addEventListener('click', function (e) {
  //   if (clicked) {
  //     const activeArea = this.getAttribute('area-code');
  //     console.log(activeArea);

  //     const activeCountry = countryCode.filter(
  //       (el) => el.getAttribute('area-country') === activeArea
  //     );
  //     activeCountry.forEach((country) => {
  //       country.parentElement?.classList.add('active-country');
  //     });
  //     clicked = false;
  //   } else {
  //     countryCode.forEach((el) => {
  //       el.parentElement?.classList.remove('active-country');
  //     });
  //     clicked = true;
  //   }
  // });
  // code.forEach((area) => {
  //   area.addEventListener('click', (e) => {
  //     // console.log(area.getAttribute('area-code'));
  //     const activeArea = area.getAttribute('area-code');

  //     const activeCountry = countryCode.filter(
  //       (el) => el.getAttribute('area-country') === activeArea
  //     );

  //     activeCountry.forEach((el) => {
  //       if (el.parentElement.classList.contains('active-country')) {
  //         el.parentElement.classList.remove('active-country');
  //       } else {
  //       }
  //     });

  //     activeCountry.forEach((country) => {
  //       country.parentElement?.classList.add('active-country');
  //       // country.classList.add('active-country');
  //     });
  //   });
  // });

  // code.forEach((area) => {
  //   area.addEventListener('click', (e) => {
  //     if (clicked) {
  //       // console.log(area.getAttribute('area-code'));
  //       const activeArea = area.getAttribute('area-code');
  //       console.log(activeArea);
  //       const activeCountry = countryCode.filter(
  //         (el) => el.getAttribute('area-country') === activeArea
  //       );

  //       activeCountry.forEach((country) => {
  //         country.parentElement?.classList.add('active-country');
  //         // country.classList.add('active-country');
  //       });
  //       // clicked = false;
  //     } else {
  //       countryCode.forEach((el) => {
  //         el.parentElement?.classList.remove('active-country');
  //       });
  //       clicked = true;
  //     }
  //   });
  // });

  //splide
  //   const allSwiper = [...document.getElementsByClassName('splide')];

  //   for (let i = 0; i < allSwiper.length; i++) {
  //     new Splide(allSwiper[i], {}).mount();
  //   }

  // const cFilterTitle = [...document.querySelectorAll('[c-filter="title"]')];
  // const cFilterContent = [...document.querySelectorAll('[c-filter="content"]')];
  // console.log(cFilterContent);

  // cFilterTitle.forEach((title, i) => {
  //   title.addEventListener('click', (e) => {
  //     cFilterTitle.forEach((eachtitlte) => {
  //       eachtitlte.classList.remove('active');
  //     });
  //     cFilterContent.forEach((content) => {
  //       content.style.display = `none`;
  //     });

  //     const activeContent = cFilterContent[i];
  //     activeContent.style.display = `flex`;
  //     title.classList.add('active');
  //   });
  // });

  //   console.log(allSwiper);
  //   allSwiper.forEach((swipe) => {
  //     console.log(swipe);
  //     new Swiper(swipe, {
  //       pagination: {
  //         el: '.pagination',
  //         type: 'fraction',
  //       },
  //       navigation: {
  //         nextEl: '.next-btn',
  //         prevEl: '.prev-btn',
  //       },
  //     });
  //   });

  //   const imageSlide = new Swiper('.swiper', {
  //     pagination: {
  //       el: '.pagination',
  //       type: 'bullets',
  //     },
  //     navigation: {
  //       nextEl: '.next-btn',
  //       prevEl: '.prev-btn',
  //     },
  //   });
});
// <script>

//   const nobaEl = document.querySelector('[area-code="noba"]');
//   const ukiEl = document.querySelector('[area-code="uki"]');
//   const ceseEl = document.querySelector('[area-code="cese"]');
//   const eerutEl = document.querySelector('[area-code="eerut"]');
//   const meaEl = document.querySelector('[area-code="mea"]');
//   const countryFitler = [...document.querySelectorAll('.area-filter.country')];

//   const countryCode = [...document.querySelectorAll('[area-country]')];
//   // eslint-disable-next-line prefer-const
//   let nobaClicked = true;
//   let ukiClicked = true;
//   let ceseClicked = true;
//   let eerutClicked = true;
//   let meaClicked = true;

//   nobaEl.addEventListener('click', nobaFunction);
//   ukiEl.addEventListener('click', ukifunction);
//   ceseEl.addEventListener('click', ceseFunction);
//   eerutEl.addEventListener('click', eerutFunction);
//   meaEl.addEventListener('click', meaFunction);

//   /////
//   ///////

//   function meaFunction() {
//     if (meaClicked) {
//       const activeArea = this.getAttribute('area-code');

//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );

//       //unactive Countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.add('unactive-country');
//       // });
//       //unactive end

//       activeCountry.forEach((country) => {
//         country.parentElement?.classList.add('active-country');
//       });
//       meaClicked = false;
//     } else {
//       const activeArea = this.getAttribute('area-code');
//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       activeCountry.forEach((el) => {
//         el.parentElement?.classList.remove('active-country');
//       });
//       /// unactive countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.remove('unactive-country');
//       // });
//       /// unactive countries End

//       meaClicked = true;
//     }
//   }

//   function eerutFunction() {
//     if (eerutClicked) {
//       const activeArea = this.getAttribute('area-code');

//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.add('unactive-country');
//       // });
//       activeCountry.forEach((country) => {
//         country.parentElement?.classList.add('active-country');
//       });

//       eerutClicked = false;
//     } else {
//       const activeArea = this.getAttribute('area-code');
//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       activeCountry.forEach((el) => {
//         el.parentElement?.classList.remove('active-country');
//       });

//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.remove('unactive-country');
//       // });

//       eerutClicked = true;
//     }
//   }

//   function ceseFunction() {
//     if (ceseClicked) {
//       const activeArea = this.getAttribute('area-code');

//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );

//       //unactive Countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.add('unactive-country');
//       // });
//       //unactive end

//       activeCountry.forEach((country) => {
//         country.parentElement?.classList.add('active-country');
//       });
//       ceseClicked = false;
//     } else {
//       const activeArea = this.getAttribute('area-code');
//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       activeCountry.forEach((el) => {
//         el.parentElement?.classList.remove('active-country');
//       });

//       //unactive Countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.remove('unactive-country');
//       // });
//       //unactive end
//       ceseClicked = true;
//     }
//   }

//   function nobaFunction() {
//     if (nobaClicked) {
//       const activeArea = this.getAttribute('area-code');
//       console.log(activeArea);

//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );

//       //unactive Countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.add('unactive-country');
//       //});
//       //unactive end

//       activeCountry.forEach((country) => {
//         country.parentElement?.classList.add('active-country');
//       });

//       nobaClicked = false;
//     } else {
//       const activeArea = this.getAttribute('area-code');
//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       activeCountry.forEach((el) => {
//         el.parentElement?.classList.remove('active-country');
//       });

//       //unactive Countries
//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.remove('unactive-country');
//       // });
//       //unactive end
//       nobaClicked = true;
//     }
//   }

//   function ukifunction() {
//     if (ukiClicked) {
//       const activeArea = this.getAttribute('area-code');

//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       //unactive Countries
//       //  const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);

//       // countryFitler.forEach((el) => {
//       //   if (el.classList.contains('unactive-country')) {
//       //     el.classList.remove('unactive-country');
//       //   }
//       // });

//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.add('unactive-country');
//       // });
//       //unactive end

//       // active countries
//       activeCountry.forEach((country) => {
//         country.parentElement?.classList.add('active-country');
//       });

//       ukiClicked = false;
//     } else {
//       const activeArea = this.getAttribute('area-code');
//       const activeCountry = countryCode.filter(
//         (el) => el.getAttribute('area-country') === activeArea
//       );
//       activeCountry.forEach((el) => {
//         el.parentElement?.classList.remove('active-country');
//       });
//       //unactive Countries

//       // const unactive = countryCode.filter((el) => el.getAttribute('area-country') !== activeArea);
//       // unactive.forEach((country) => {
//       //   country.parentElement?.classList.remove('unactive-country');
//       // });
//       //unactive end
//       ukiClicked = true;
//     }
//   }

// </script>
