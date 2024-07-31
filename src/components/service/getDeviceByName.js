import axios from 'axios';


export const getDeviceByName = async query => {
  const options = {
    method: 'POST',
    url: 'https://api.techspecs.io/v4/product/search',
    params: { query: query, keepCasing: 'true' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19PeXRiandkUVpUemQ1RSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTY5OTYyNjk3Nn0.qqPlVjKOWfW0tRmg6xgjFPb6oDH-CYcUa9hy6E8hVzo',
      'content-type': 'application/json',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
   
    })
    .catch(function (error) {
      console.error(error);
    });
};
