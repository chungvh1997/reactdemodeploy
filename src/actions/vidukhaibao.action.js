// import * as Types from "../variables/actionTypes";
// import callApi from "../utils/callApi";
// import { actFetchResourceSuccess, actFetchResourceFail } from "./fetch.action";

// ****************************************************************************************

// UPDATE
// export const actUpdateAdminRequest = (
//   id,
//   status,
//   no_change,
//   address,
//   phone,
//   name,
//   email,
//   roles
// ) => {
//   return dispatch => {
//     return callApi("admins/" + id, "PUT", {
//       status,
//       no_change,
//       address,
//       phone,
//       name,
//       email,
//       roles
//     })
//       .then(res => {
//         dispatch(
//           actFetchResourceSuccess({
//             message: "Bạn đã cập nhật Notification thành công!",
//             confirmTo: "/quan-tri-vien"
//           })
//         );
//       })
//       .catch(res => {
//         var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//         dispatch(
//           actFetchResourceFail({
//             message: message,
//             confirmTo: "/sua-quan-tri-vien/" + id
//           })
//         );
//       });
//   };
// };
// ****************************************************************************************

// UPDATE 2

// export const actUpdateUserRequest = (id, data) => {
//   return dispatch => {
//     return callApi("users/" + id, "PUT", data)
//       .then(() => {
//         dispatch(
//           actFetchResourceSuccess({
//             message: "Bạn đã cập nhật thành công cư dân",
//             confirmTo: "/cu-dan/chinh-thuc"
//           })
//         );
//       })
//       .catch(() => {
//         dispatch(
//           actFetchResourceFail({
//             message: "Đã có lỗi xảy ra vui lòng thử lại sau",
//             confirmTo: "/cu-dan/chinh-thuc"
//           })
//         );
//       });
//   };
// };
// ****************************************************************************************
// CREATE

// export const actCreateAdminRequest = (
//   status,
//   roles,
//   no_change,
//   address,
//   phone,
//   name,
//   email,
//   password
// ) => {
//   return dispatch => {
//     return callApi("admins", "POST", {
//       status,
//       roles,
//       no_change,
//       address,
//       phone,
//       name,
//       email,
//       password
//     })
//       .then(res => {
//         dispatch(
//           actFetchResourceSuccess({
//             message: "Bạn đã thêm Notification thành công!",
//             confirmTo: "/quan-tri-vien"
//           })
//         );
//       })
//       .catch(res => {
//         var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//         dispatch(
//           actFetchResourceFail({
//             message: message,
//             confirmTo: "/them-quan-tri-vien"
//           })
//         );
//       });
//   };
// };

// ****************************************************************************************
// GET DATA theo ID

// export const actGetAdminByIDRequest = id => {
//   return dispatch => {
//     return callApi(`admins/` + id, "GET").then(res => {
//       dispatch(actGetadminsByID(res));
//     });
//   };
// };
// export const actGetadminsByID = adminDetail => {
//   return {
//     type: Types.GET_ADMINBYID,
//     adminDetail
//   };
// };

// GET data 

// export const actGetListAdminRequest = () => {
//   return dispatch => {
//     return callApi(`admins`, "GET").then(res => {
//       dispatch(actGetListAdmin(res));
//     });
//   };
// };
// export const actGetListAdmin = listAdmin => {
//   return {
//     type: Types.GET_LISTADMIN,
//     listAdmin
//   };
// };


// ****************************************************************************************
// get truyen tham so


// export const actGetUsersRequest = (
//   page = 1,
//   limit = 10,
//   name = "",
//   apartment_id = "",
//   email = "",
//   sort = "createdAt",
//   sortType = "asc"
// ) => {
//   return dispatch => {
//     return callApi(
//       `users` +
//         `?page=${page}` +
//         `&limit=${limit}` +
//         `&name=${name}` +
//         `&apartment_id=${apartment_id}` +
//         `&email=${email}` +
//         `&sort=${sort}|` +
//         `${sortType}`,
//       "GET"
//     ).then(res => {
//       dispatch(actGetUsers(res));
//     });
//   };
// };

// export const actGetUsers = users => {
//   return {
//     type: Types.GET_USERS,
//     users
//   };
// };
