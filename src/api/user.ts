import request from "@/utils/request";

const user = {
  // 登录
  login(data: API.InterData) {
    return request({
      url: "/login",
      method: "post",
      data,
    });
  },
  // 获取用户列表
  getUserList(data: API.ListParams) {
    return request({
      url: "/userList",
      method: "post",
      data,
    });
  },
};

export default user;
