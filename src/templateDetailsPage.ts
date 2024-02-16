import 'jszip';

import JSZip from 'jszip';

import { downloadFunction } from './download';
import { appendElParent, downloadImageArray } from './helperFunction';
import { copyFunction } from './shareModule';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('ImageGallery');
  // console.log(listingID);

  // downloadImageArray(
  //   'https://upload.wikimedia.org/wikipedia/commons/9/98/Pet_dog_fetching_sticks_in_Wales-3April2010.jpg',
  //   'image Name'
  // );

  const mainImg = document.querySelector('[lf-image="main"]') as HTMLImageElement;
  const cardAll = [...document.querySelectorAll('[lf-image]')];
  const downloadImageWrap = document.querySelector('[lf-element="downloadwrap"]');

  const imageWrapper = document.getElementById('imageContainer') as HTMLElement;

  const formEl = document.querySelector('[lf-element="form-el"]') as HTMLFormElement;
  const downloadBtn = document.querySelector('[lf-button="download"]') as HTMLButtonElement;
  const downloadImageWrapForm = document.querySelector(
    '[lf-element="downloadimgwrap"]'
  ) as HTMLElement;
  const triggerButton = document.querySelector(
    '[lf-button="downloadTrigger"]'
  ) as HTMLButtonElement;
  console.log(triggerButton);

  const headingTitle = document.querySelector('[lf-element="heading"]')?.textContent;
  const count = document.querySelector('[lf-element="sel-num"]') as HTMLElement;
  console.log(count);

  const imgArray = [] as Array<string>;

  async function downloadImagesZip(imgUrls) {
    const jszip = new JSZip();

    //function to fetch the image and add an image to the zip
    const addImageZip = async (url, index) => {
      const response = await fetch(url);
      const blob = await response.blob();
      jszip.file(`image_${index}.jpg`, blob);
      // jszip.file(`${headingTitle}${index}.jpg`, blob);
    };

    //add all images to the zip
    const imgPromise = imgUrls.map((url, index) => addImageZip(url, index));
    await Promise.all(imgPromise);

    // Generate zip and trigger download
    jszip.generateAsync({ type: 'blob' }).then(function (content) {
      const element = document.createElement('a');
      element.href = URL.createObjectURL(content);
      element.download = `${headingTitle}image.zip`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }

  const imgFlexContainer = document.querySelector('[lf-img="flex"]') as HTMLElement;
  const showAllBtn = document.querySelector('[lf-element="popbtn"]') as HTMLElement;
  const imgGallery = document.querySelector('.img_gallery--section') as HTMLElement;
  const closeGallery = document.querySelector('[lf-element="close-btn"]') as HTMLElement;
  const locations = [...document.querySelectorAll('[lf-element="location"]')];

  const sliderContainer = document.getElementById('slideWrap');
  const thumbImgWrap = document.getElementById('thumbImgWrap');

  const imageSlideSection = document.querySelector('[lf-element="imageSlide"]') as HTMLElement;
  const slideCLoseBtn = document.querySelector('[lf-element="slideClosebtn"]');

  downloadBtn.disabled = true;

  copyFunction();
  downloadFunction();
  ///Swiper Image init

  const thumbSLide = new Swiper('#thumbSlide', {
    spaceBetween: 10,
    slidesPerView: 5,
    //  centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const imageSlide = new Swiper('#swiperMain', {
    pagination: {
      el: '.pagination-wrap',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.next--btn',
      prevEl: '.prev--btn',
    },
    thumbs: {
      swiper: thumbSLide,
    },
  });

  slideCLoseBtn?.addEventListener('click', (e) => {
    imageSlideSection.style.display = `none`;
  });

  const client_id = 'Loudface';
  const client_secret = 'shgrgsVkifzpUOOfVlscfUxs';
  const auth_url = 'https://auth.iceportal.com/connect/token';

  const getClientCredentialsToken = async () => {
    const payload = new URLSearchParams();
    payload.append('grant_type', 'client_credentials');
    payload.append('client_id', client_id);
    payload.append('client_secret', client_secret);

    try {
      const response = await fetch(auth_url, {
        method: 'POST',
        // mode: 'no-cors',

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      });

      if (response.ok) {
        const data = await response.json();
        const { access_token } = data;
        return access_token;
      }
      console.error('Failed to get token:', await response.text());
    } catch (error) {
      console.error(`Error in getting token: ${error}`);
    }
  };

  ///listing API URL
  const apiUrl = `https://api.iceportal.com/v1/listings/${listingID}/assets`;
  ///Gallery Section Show/hide function

  //// Slide show on CLick

  /// function to show Swipe image
  const showSlide = function (i: 0) {
    imageSlideSection.style.display = `flex`;
    imageSlide.slideTo(i);
  };

  ////Getting the listing Details on details page
  ///////Using the token received to make the actual call
  async function fetchDataWithOAuth2(access_token: string) {
    // Set up the headers with the access token
    const headers = new Headers({
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json', // Adjust this based on the API's requirements
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });
      //Checking for errors
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      ////handling the results

      // clear the skeleton image
      imageWrapper.innerHTML = '';

      const data = await response.json();
      const iceImageData = data.results;

      //activate button when response arived
      downloadBtn.disabled = false;

      const locale = iceImageData.filter((keys) => {
        return keys.keywords;
      });

      console.log(locale[0]);

      //Location from Api response
      const locationData = locale[0];
      console.log(locationData);
      const [loca] = locationData.keywords.splice(-1);

      locations.forEach((el) => {
        el.textContent = loca;
      });

      ///image array/// getting the image cdn links
      const imageArray = iceImageData.map((el) => el.links.cdnLinks[0]);

      const imgWithCaption = iceImageData.map((el) => {
        return { imgLink: el.links.cdnLinks[0], tag: el.iceTags[0].tags[1].name };
      });

      // image array in grid layout
      imageArray.forEach((url, i) => {
        const img = new Image();
        img.onload = function () {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          const orientation = aspectRatio > 1 ? 'landscape' : 'portrait';
          // Generate a random number between 1 and 3
          // const randomNumber = Math.floor(Math.random() * 3) + 1;
          // Create a wrapper div and append the image to it
          const wrapper = document.createElement('div');
          wrapper.classList.add('item', `${orientation}`, i);
          wrapper.appendChild(img);

          // Append the wrapper to the container
          imageWrapper.appendChild(wrapper);

          wrapper.addEventListener('click', function () {
            showSlide(i);
          });
        };
        img.src = url;
      });
      ///

      const SliderElImage = imgWithCaption.map((imgObj, i) => {
        const divElement = document.createElement('div') as HTMLElement;
        // const imgEl = document.createElement('img') as HTMLImageElement;
        const textEl = document.createElement('p') as HTMLParagraphElement;
        textEl.textContent = `${imgObj.tag}`;
        ///append image element to Div and Add corresponding class to it
        const imgOb = new Image();
        imgOb.src = imgObj.imgLink;
        imgOb.onload = function () {
          const aspectRatio = imgOb.naturalWidth / imgOb.naturalHeight;
          const orientation = aspectRatio > 1 ? 'land-scape' : 'port-rait';
          const imgDiv = document.createElement('div') as HTMLElement;
          imgDiv.classList.add(`${orientation}`, 'listing-imgwrap');
          imgDiv.appendChild(imgOb);
          divElement.appendChild(imgDiv);
          divElement.appendChild(textEl);
        };

        divElement.classList.add(`swiper-slide`);

        return divElement;
      });

      ///Thumb slide image addition
      const thumbSLideimg = imageArray.map((img, i) => {
        const divElement = document.createElement('div') as HTMLElement;
        const imgEl = document.createElement('img') as HTMLImageElement;

        ///append image element to Div and Add corresponding class to it
        divElement.appendChild(imgEl);
        imgEl.src = img;
        divElement.classList.add(`swiper-slide`);
        return divElement;
      });

      // console.log(thumbSLideimg);
      //Append slide image to swiper-wrapper container

      appendElParent(thumbSLideimg, thumbImgWrap);

      ///Append SLide image Elements to swiper container
      SliderElImage.forEach((slide) => {
        sliderContainer?.appendChild(slide);
      });
      // console.log(SliderElImage);

      /////Download image attachement

      const downloadImage = imageArray.map((img, i) => {
        const anchorEl = document.createElement('a') as HTMLAnchorElement;
        const imgEl = document.createElement('img') as HTMLImageElement;
        anchorEl.href = `${imageArray[i]}`;
        anchorEl.setAttribute('download', `${imageArray[i]}`);
        ///append image element to Div and Add corresponding class to it
        anchorEl.appendChild(imgEl);
        imgEl.src = img;
        anchorEl.classList.add(`image-dd`);
        return anchorEl;
      });

      const labelMap = imageArray
        .map((el, i) => {
          return `<label lf-element="label" class="w-checkbox img-checkbox"><img src="${el}" loading="lazy" alt="" class="prop-img"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input value="${el}" type="checkbox" id="checkbox${i}" name="checkbox" data-name="Checkbox" style="opacity:0;position:absolute;z-index:-1"><div class="download-icon w-embed"><svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16.6683H15M10 3.33496V13.335M10 13.335L12.9167 10.4183M10 13.335L7.08333 10.4183" stroke="#141414" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg></div></label>`;
        })
        .join('');

      downloadImageWrapForm.innerHTML = `${labelMap}`;

      const labelEL = document.querySelectorAll('[lf-element="label"]');

      labelEL.forEach((label) => {
        label.addEventListener('change', (e) => {
          const input = e.target as HTMLInputElement;
          const imgLink = input.value;
          if (input.checked) {
            imgArray.push(imgLink);
            checkImgArrayLength();
          } else {
            const arrayIndex = imgArray.indexOf(imgLink);
            imgArray.splice(arrayIndex, 1);
            checkImgArrayLength();
          }
        });
      });

      const checkImgArrayLength = function () {
        const arrayLenght = imgArray.length;
        count.textContent = `${arrayLenght}`;
      };

      triggerButton.addEventListener('click', (e) => {
        if (imgArray.length > 0) {
          // downloadImagesZip(imgArray);
          console.log(imgArray);
          imgArray.forEach((img) => {
            downloadImageArray(img, `${headingTitle}img`);
          });
        }
      });

      // appendElParent(labelMap, formEl);

      ////Download features end
      //imageSlide.init();
      // ON HOLD FOR NOW
      ///Image gallery Section ///
      ////
    } catch (err) {
      console.log(err);
    }
  }

  // ///getting the authorized token and passing it to the fetch fata function
  //iife function
  (async () => {
    const token = await getClientCredentialsToken();
    if (token) {
      console.log(`Received token: ${token}`);
      await fetchDataWithOAuth2(token);
    }
  })();
});
