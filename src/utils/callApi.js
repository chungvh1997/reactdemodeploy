import axios from "axios";
import HOST from "../variables/host";

export default function callApi(
  endpoint,
  method = "GET",
  data = null,
  form_data = false
) {
  return axios({
    method: method,
    url: `${HOST}/${endpoint}`,
    data: data,
    headers: {
      access_token: localStorage.getItem("access_token"),
      "content-type": !form_data
        ? "application/json;charset=UTF-8"
        : "multipart/form-data"
    }
  }).then(res => {
    return res.data;
  });
  // .catch(err => {
  //   if (!err.response) {
  //     window.location.href = "/dang-nhap";
  //   } else {
  //     const status = err.response.data.status;
  //     if (status === 403) window.location.href = "/dang-nhap";
  //   }
  // });
}
