window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hello');

  const imageWrapper = document.getElementById('imageContainer') as HTMLElement;
  const inputForm = document.getElementById('listingForm') as HTMLFormElement;
  const listingInput = document.getElementById('inputListing') as HTMLInputElement;

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
  //const listingID = 154872;
  // const apiUrl = `https://api.iceportal.com/v1/listings/${listingID}/assets`;

  ///input section
  let inputValue;
  //159019 liverpool red
  //156856 battersea
  //porsche 159834

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    inputValue = listingInput.value;

    //set the parent Container to empty
    imageWrapper.innerHTML = ``;

    const apiUrl = `https://api.iceportal.com/v1/listings/${inputValue}/assets`;

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
        const data = await response.json();
        const iceImageData = data.results;

        const imageArray = iceImageData.map((el) => el.links.cdnLinks[0]);

        ///

        // image array in grid layout
        imageArray.forEach((url) => {
          const img = new Image();
          img.src = url;
          img.onload = function () {
            const aspectRatio = img.naturalWidth / img.naturalHeight;

            const orientation = aspectRatio > 1 ? 'landscape' : 'portrait';

            // Generate a random number between 1 and 3
            // const randomNumber = Math.floor(Math.random() * 3) + 1;

            // Create a wrapper div and append the image to it
            const wrapper = document.createElement('div');
            wrapper.classList.add('item', `${orientation}`);
            wrapper.appendChild(img);

            // Append the wrapper to the container
            imageWrapper.appendChild(wrapper);
          };
        });
        ///

        console.log(imageArray);
      } catch (err) {
        console.log(err);
      }
    }

    (async () => {
      const token = await getClientCredentialsToken();
      if (token) {
        console.log(`Received token: ${token}`);
        await fetchDataWithOAuth2(token);
      }
    })();
  });
});
