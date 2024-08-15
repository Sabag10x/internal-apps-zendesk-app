const API_KEYS = {
  id: 'zendesk-rest-client',
  apiKey: 'L5knPlryeZmZ9uvo784fi95rBOANpNAc',
  /*  id: 'zendesk-rest-client',
  apiKey: 'MEMPME9FCy2viZl57W6UA5cM8jyV5lBk', */
};

const BASE_URL = {
  STAGING: 'https://ia-rest-api-main.staging.ipsy.bfainfra.com/',
  PROD: 'https://ia-rest-api-main.prod.ipsy.bfainfra.com/',
};

export const getTokenRequest = async (client) =>
  client
    .request({
      url: `${BASE_URL.PROD}auth/getToken`,
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        ...API_KEYS,
      }),
    })
    .then((response) => {
      return response;
    });

export const getClientOrders = async (client, token, email) =>
  client
    .request({
      url: `${BASE_URL.PROD}orders/getOrdersByEmail`,
      type: 'POST',
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      dataType: 'json',
      data: JSON.stringify({
        email,
      }),
    })
    .then((response) => {
      if (response && response.getOrdersByEmail) {
        return (response.getOrdersByEmail || []).slice(0, 3);
      }

      return [];
    })
    .catch((error) => {
      console.error(error);

      return [];
    });
