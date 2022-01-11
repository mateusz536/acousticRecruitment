import Axios from "axios";

export const BASE_URL =
  "https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const getContentItem = (id) => {
  return axiosInstance.get(`/delivery/v1/content/${id}`);
};

export const getResource = (href) => {
  return axiosInstance.get(href);
};
