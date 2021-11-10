import axios from "axios";

const establishmentApi = axios.create({
  baseURL: "https://easy-park-iw.herokuapp.com/establishment/",
});

export default establishmentApi;