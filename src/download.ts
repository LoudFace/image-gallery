//Download function

import { slideIn, slideOut } from './helperFunction';

const downloadBtn = document.querySelector('[lf-button="download"]');
const downImageList = document.querySelector('#downItemWrap') as HTMLElement;
const closeBtn = document.querySelector('[lf-button="downloadClose"]');

export const downloadFunction = function () {
  downloadBtn?.addEventListener('click', (e) => {
    slideIn(downImageList, 'block');
  });

  closeBtn?.addEventListener('click', (e) => {
    slideOut(downImageList);
  });
};
