import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.DEV ? "/api" : import.meta.env.BASE_URL,
  withCredentials: true,
  timeout: 18000,
});

service.interceptors.request.use((config) => {
  //Todo
  // const token = user.$state.token;
  // if (token) {
  //   config.headers["admin-token"] = getToken();
  // }
  return config;
});

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    //Todo
    // console.log(data);
    // if (data.code !== 200) {
    //   console.error("接口请求出错！");
    // }
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
