import BaseService from "./baseService";
import API from "configs/rest";

const getUserById = (userId) => {
  return BaseService.get(API.USERBYID(userId));
};

export default { getUserById };
