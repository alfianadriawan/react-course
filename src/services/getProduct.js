import BaseService from "./baseService";
import API from "configs/rest";

const getProduct = (productName) => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 10,
      offset: 0,
      search: productName,
    },
  });
};

export default { getProduct };
