import { slideIn, slideInOpacity, slideOut, slideOutOpacity } from './helperFunction';
window.Webflow ||= [];
window.Webflow.push(() => {
  const searchInput = document.querySelector('[lf-search="input"]') as HTMLInputElement;
  const searchResult = document.querySelector('[lf-element="search-result"]') as HTMLElement;
  const cFilterBtn = document.querySelector('[lf-element="c-filter-btn"]') as HTMLElement;
  const cFilter = document.querySelector('[lf-element="c-filter"]') as HTMLElement;
  const closeIcon = document.querySelector('[lf-element="close-icon"]');

  //
  const mainFilterWrap = document.querySelector('[lf-filter="main"]') as HTMLElement;
  //

  const submitBtn = document.getElementById('submitBtn');
  const closeArea = document.getElementById('close-area') as HTMLElement;
  const searchCLoseArea = document.getElementById('searchCloseArea') as HTMLElement;

  closeIcon?.addEventListener('click', (e) => {
    slideOutOpacity(cFilter);
    closeArea.style.display = 'none';
  });

  searchInput.addEventListener('input', (e) => {
    if (searchInput.value) {
      slideIn(searchResult, 'flex');
      searchCLoseArea.style.display = 'block';
      slideOutOpacity(cFilter);
      closeArea.style.display = 'none';

      //
      mainFilterWrap.style.zIndex = `49`;
      //
    } else {
      slideOut(searchResult);
      searchCLoseArea.style.display = 'none';
      mainFilterWrap.style.zIndex = `50`;
    }
    //console.log(e.data);
  });

  submitBtn?.addEventListener('click', (e) => {
    slideOutOpacity(cFilter);
    closeArea.style.display = 'none';
  });

  closeArea?.addEventListener('click', () => {
    slideOutOpacity(cFilter);
    closeArea.style.display = 'none';
    mainFilterWrap.style.zIndex = `50`;
  });

  searchCLoseArea.addEventListener('click', (e) => {
    slideOut(searchResult);
    searchInput.value = '';
    searchCLoseArea.style.display = 'none';
    mainFilterWrap.style.zIndex = `50`;
  });

  cFilterBtn?.addEventListener('click', (e) => {
    slideInOpacity(cFilter);
    closeArea.style.display = 'block';
  });

  ////////////////
  /////////////
  ///share button functionality
  // const shareWrap = document.querySelector('.share-wrap') as HTMLElement;
  // const shareBtn = document.querySelectorAll('[lf-button="share"]');
  // const shareClosearea = document.querySelector('.share-close-area') as HTMLElement;
  // const shareClosebtn = document.querySelector('[lf-btn="shareclose"]');

  // //console.log(shareWrap);

  // shareBtn.forEach((btn) => {
  //   btn.addEventListener('click', () => {
  //     slideIn(shareWrap, 'flex');
  //     shareClosearea.style.display = 'block';
  //   });
  // });

  // shareClosebtn?.addEventListener('click', () => {
  //   slideOut(shareWrap);
  // });

  // shareClosearea?.addEventListener('click', () => {
  //   slideOut(shareWrap);
  // });
});

// const checkStatus = function () {
//   const clickedState = allLabel.filter((label) => {
//     label.classList.contains('fs-cmsfilter_active');
//   });

//   if (clickedState.length > 0) {
//     filterResultWrap.style.display = 'flex';
//   } else {
//     filterResultWrap.style.display = 'none';
//   }
// };
