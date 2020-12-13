// eslint-disable-next-line import/no-anonymous-default-export
export default {
  LOGIN: "/api/login",
  PRODUCT: "/api/product",
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
