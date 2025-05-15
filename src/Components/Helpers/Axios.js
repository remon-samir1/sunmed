import  axios  from "axios";
// import Cookies from "cookie-universal";
// const cookie = Cookies()
// const token = cookie.get('token')
// (token);
export const Axios = axios.create({
  baseURL:'https://sunmedagency.com/api',
  headers: {
    // Authorization: 'Bearer ' + token
  }
})
