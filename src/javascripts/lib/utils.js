const BASE_URL = {
  STAGING: 'https://member.staging.ipsy.com',
  PROD: 'https://member.prod.ipsy.com',
};

export const getRequesterEmail = async (client) =>
  client
    .get('ticket')
    .then((data) => {
      return data.ticket.requester.email;
    })
    .catch((error) => console.error(error));

export const getMemberUrl = (email) => {
  const memberUrl = new URL(`${BASE_URL.PROD}/search/users/`);
  memberUrl.searchParams.append('searchType', 'primary');
  memberUrl.searchParams.append('criteria.general.businessId', 'ipsy,ipsymx,boxy,runway');
  memberUrl.searchParams.append('criteria.general.email', email);

  return memberUrl;
};

export const getOrderUrl = (order) => {
  const {business_id: businessId, id} = order;

  const orderUrl = new URL(`${BASE_URL.PROD}/${businessId}/orders/${id}`);

  return orderUrl;
};

export const getKittingOrderUrl = (order) => {
  const {business_id: businessId, kitting_order_id} = order;

  const orderUrl = new URL(`${BASE_URL.PROD}/${businessId}/kitting-orders/${kitting_order_id}`);

  return orderUrl;
};
