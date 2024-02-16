export const slideIn = function (elementSection: HTMLElement, displayType: string) {
  elementSection.style.display = `${displayType}`;
  // setTimeout(() => {
  //   elementSection.style.transform = `translate(0px, 0%)`;
  // }, 10);
};

export const slideInOpacity = function (elementSection: HTMLElement) {
  elementSection.style.display = 'block';
  // setTimeout(() => {
  //   elementSection.style.transform = `translate(0px, 0%)`;
  // }, 10);
};

export const slideOutOpacity = function (elementSection: HTMLElement) {
  // elementSection.style.transform = `translate(0px, 100%)`;
  elementSection.style.display = 'none';
  // setTimeout(() => {
  //   elementSection.style.display = 'none';
  // }, 10);
};

export const slideOut = function (elementSection: HTMLElement) {
  //elementSection.style.transform = `translate(0px, 100%)`;
  elementSection.style.display = 'none';
  // setTimeout(() => {
  //   elementSection.style.display = 'none';
  // }, 10);
};

export const appendElParent = function (elArray, parentEl) {
  elArray.forEach((slide) => {
    parentEl?.appendChild(slide);
  });
};

export const downloadImageArray = async function (url: string, name: string) {
  const imgfetch = await fetch(url, {});
  const imgData = await imgfetch.blob();
  const href = URL.createObjectURL(imgData);
  const anchorEl = document.createElement('a');
  anchorEl.href = href;
  anchorEl.download = name;
  document.body.appendChild(anchorEl);
  anchorEl.click();

  setTimeout(() => {
    URL.revokeObjectURL(href);
  }, 0);
};

// export const downloadImageArray = async function (url: string, name: string) {
//   // const imgfetch = await fetch(url, {
//   //   method: 'GET',
//   //   headers: {
//   //     accept: 'application/json',
//   //   },
//   //   credentials: 'include',
//   // });

//   // console.log(imgfetch);

//   const imgCon = new Image();
//   imgCon.src = url;

//   // const imgData = await imgfetch.blob();
//   // console.log(imgData);

//   // const href = URL.createObjectURL(imgCon);
//   console.log(imgCon.src);
//   const anchorEl = document.createElement('a');
//   anchorEl.href = imgCon.src;
//   anchorEl.download = name;
//   document.body.appendChild(anchorEl);
//   anchorEl.click();

//   setTimeout(() => {
//     URL.revokeObjectURL(imgCon.src);
//   }, 0);
// };

// Putting this script in the `<head>` tag makes it execute before the DOM is built. So your querySelector functions won't work.

// <!-- Simplified Script -->
