import axios from "axios";

const userApi = axios.create({
  baseURL: "https://easy-park-iw.herokuapp.com/user/",
});

export default userApi;