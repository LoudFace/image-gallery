import { slideIn, slideInOpacity, slideOut, slideOutOpacity } from './helperFunction';

const copyEl = document.querySelector('[lf-button="copy"]');

const facebookBtn = document.querySelector('[button-el="facebook"]');
const twitterBtn = document.querySelector('[button-el="twitter"]');
const whatsappBtn = document.querySelector('[button-el="whatsapp"]');
const messengerBtn = document.querySelector('[button-el="messenger"]');

const allBtn = [...document.querySelectorAll('[button-el]')];

//console.log(urlSlug);
export const copyFunction = function () {
  copyEl?.addEventListener('click', function () {
    const url = window.location.href;
    const text = this.querySelector('.copy-text');

    navigator.clipboard
      .writeText(url)
      .then(function () {
        text.textContent = `Link Copied!`;
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  allBtn.forEach((btn) => {
    btn.href = 'javascript:void(0)';
  });

  function shareOnFacebook() {
    const url = window.location.href;
    const facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    window.open(facebookUrl, 'facebookPopup', 'width=600,height=400');
  }

  function shareOnTwitter() {
    const url = window.location.href;
    const text = 'Check this out!'; // Customize your tweet text here
    const twitterUrl =
      'https://twitter.com/intent/tweet?url=' +
      encodeURIComponent(url) +
      '&text=' +
      encodeURIComponent(text);
    window.open(twitterUrl, 'twitterPopup', 'width=600,height=400');
  }

  function shareOnLinkedIn() {
    const url = window.location.href;
    const linkedInUrl =
      'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
    window.open(linkedInUrl, 'linkedInPopup', 'width=600,height=400');
  }

  function shareOnMessenger() {
    const url = window.location.href;
    const messengerUrl = 'fb-messenger://share?link=' + encodeURIComponent(url);
    window.open(messengerUrl, '_blank');
  }

  function shareOnWhatsApp() {
    const url = window.location.href;
    const text = 'Check this out! '; // Customize your message here
    const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(text + url);
    window.open(whatsappUrl, '_blank');
  }

  facebookBtn?.addEventListener('click', shareOnFacebook);
  twitterBtn?.addEventListener('click', shareOnTwitter);
  whatsappBtn?.addEventListener('click', shareOnWhatsApp);
  messengerBtn?.addEventListener('click', shareOnMessenger);
};

window.Webflow ||= [];
window.Webflow.push(() => {
  //share button functionality
  const shareWrap = document.querySelector('.share-wrap') as HTMLElement;
  const shareBtn = document.querySelectorAll('[lf-button="share"]');
  const shareClosearea = document.querySelector('.share-close-area') as HTMLElement;
  const shareClosebtn = document.querySelector('[lf-btn="shareclose"]');

  shareBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      slideIn(shareWrap, 'flex');
      shareClosearea.style.display = 'block';
    });
  });

  shareClosebtn?.addEventListener('click', () => {
    slideOut(shareWrap);
  });

  shareClosearea?.addEventListener('click', () => {
    slideOut(shareWrap);
  });
});
