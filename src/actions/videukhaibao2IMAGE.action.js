// import * as Types from "../variables/actionTypes";
// import callApi from "../utils/callApi";
// import callApiWebView from "../utils/callApiWebView";
// import { actFetchResourceSuccess, actFetchResourceFail } from "./fetch.action";
// import uploadApi from "../utils/uploadApi";

// export const actGetAnnouncementRequest = (
//   page = 1,
//   limit = 5,
//   name = "",
//   createdAt = ""
// ) => {
//   return dispatch => {
//     return callApi(
//       `anouncements` +
//         `?page=${page}` +
//         `&limit=${limit}` +
//         `&name=${name}` +
//         `&createdAt=${createdAt}` +
//         `&sort=isPin|desc`,
//       "GET"
//     ).then(res => {
//       dispatch(actGetAnnouncement(res));
//     });
//   };
// };

// export const actGetAnnouncement = announcement => {
//   return {
//     type: Types.GET_ANNOUNCEMENT,
//     announcement
//   };
// };

// export const actGetAppAnnouncementByIDRequest = id => {
//   return dispatch => {
//     return callApiWebView(`app/api/announcements/` + id, "GET").then(res => {
//       dispatch(actGetAnnouncementByID(res));
//     });
//   };
// };

// export const actGetAnnouncementByIDRequest = id => {
//   return dispatch => {
//     return callApi(`anouncements/` + id, "GET").then(res => {
//       dispatch(actGetAnnouncementByID(res));
//     });
//   };
// };
// export const actGetAnnouncementByID = announcementDetail => {
//   return {
//     type: Types.GET_ANNOUNCEMENTBYID,
//     announcementDetail
//   };
// };

// export const actCreateStaffRequest = (
//   name,
//   content,
//   author,
//   description,
//   status,
//   isPin,
//   isReadyAnnouce,
//   File
// ) => {
//   return dispatch => {
//     if (File.idFile.length === 0) {
//       var data = {
//         name,
//         content,
//         author,
//         description,
//         status,
//         isPin,
//         isReadyAnnouce
//       };
//       return callApi("anouncements", "POST", data)
//         .then(res => {
//           dispatch(
//             actFetchResourceSuccess({
//               message: "Bạn đã thêm thông báo thành công!",
//               confirmTo: "/thong-bao-bai-viet"
//             })
//           );
//         })
//         .catch(res => {
//           var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//           dispatch(
//             actFetchResourceFail({
//               message: message,
//               confirmTo: "/thong-bao/create"
//             })
//           );
//         });
//     } else {
//       var formData = new FormData();
//       formData.append("file", File.idFile[0]);
//       return uploadApi("anouncement/upload", formData)
//         .then(res => {
//           let file_attachment = res;
//           var data = {
//             name,
//             content,
//             author,
//             description,
//             status,
//             isPin,
//             isReadyAnnouce,
//             file_attachment
//           };
//           return callApi("anouncements", "POST", data)
//             .then(res => {
//               dispatch(
//                 actFetchResourceSuccess({
//                   message: "Bạn đã thêm thông báo thành công!",
//                   confirmTo: "/thong-bao-bai-viet"
//                 })
//               );
//             })
//             .catch(res => {
//               var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//               dispatch(
//                 actFetchResourceFail({
//                   message: message,
//                   confirmTo: "/thong-bao/create"
//                 })
//               );
//             });
//         })
//         .catch(res => {
//           var message = "Đã có lỗi upload file xảy ra xin vui lòng thử lại sau";
//           dispatch(
//             actFetchResourceFail({
//               message: message,
//               confirmTo: "/thong-bao/create"
//             })
//           );
//         });
//     }
//   };
// };

// export const actUpdateAnnouncementRequest = (
//   id,
//   name,
//   content,
//   author,
//   description,
//   status,
//   isPin,
//   isReadyAnnouce,
//   File
// ) => {
//   return dispatch => {
//     if (typeof File.idFile === "string") {
//       var data = {
//         name,
//         content,
//         author,
//         description,
//         status,
//         isPin,
//         isReadyAnnouce
//       };
//       return callApi("anouncements/" + id, "PUT", data)
//         .then(res => {
//           dispatch(
//             actFetchResourceSuccess({
//               message: "Bạn đã cập nhật announcement thành công!",
//               confirmTo: "/thong-bao-bai-viet"
//             })
//           );
//         })
//         .catch(res => {
//           //const status = res.response.data.status;
//           var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//           //if (status === 409) message = "Mã nhân viên hoặc địa chỉ email đã tồn tại, vui lòng thử lại";
//           dispatch(
//             actFetchResourceFail({
//               message: message,
//               confirmTo: "/thong-bao/update/" + id
//             })
//           );
//         });
//     } else {
//       var formData = new FormData();
//       formData.append("file", File.idFile[0]);
//       return uploadApi("anouncement/upload", formData)
//         .then(res => {
//           let file_attachment = res;
//           var data = {
//             name,
//             content,
//             author,
//             description,
//             status,
//             isPin,
//             isReadyAnnouce,
//             file_attachment
//           };
//           return callApi("anouncements/" + id, "PUT", data)
//             .then(res => {
//               dispatch(
//                 actFetchResourceSuccess({
//                   message: "Bạn đã cập nhật announcement thành công!",
//                   confirmTo: "/thong-bao-bai-viet"
//                 })
//               );
//             })
//             .catch(res => {
//               //const status = res.response.data.status;
//               var message = "Đã có lỗi xảy ra xin vui lòng thử lại sau";
//               //if (status === 409) message = "Mã nhân viên hoặc địa chỉ email đã tồn tại, vui lòng thử lại";
//               dispatch(
//                 actFetchResourceFail({
//                   message: message,
//                   confirmTo: "/thong-bao/update/" + id
//                 })
//               );
//             });
//         })
//         .catch(res => {
//           var message = "Đã có lỗi upload file xảy ra xin vui lòng thử lại sau";
//           dispatch(
//             actFetchResourceFail({
//               message: message,
//               confirmTo: "/thong-bao/update/" + id
//             })
//           );
//         });
//     }
//   };
// };

// export const actToggleAnouncementStatusRequest = id => {
//   return dispatch => {
//     return callApi("anouncement/toggleStatus/" + id, "PUT").then(() => {
//       dispatch(actToggleAnouncementStatus(id));
//     });
//   };
// };

// export const actToggleAnouncementStatus = id => {
//   return {
//     type: Types.TOGGLE_ANOUNCEMENT_STATUS,
//     id
//   };
// };

// export const actToggleAnouncementPinRequest = id => {
//   return dispatch => {
//     return callApi("anouncement/togglePin/" + id, "PUT").then(() => {
//       dispatch(actGetAnnouncementRequest());
//       dispatch(actToggleAnouncementPin(id));
//     });
//   };
// };

// export const actToggleAnouncementPin = id => {
//   return {
//     type: Types.TOGGLE_ANOUNCEMENT_PIN,
//     id
//   };
// };
// export const actDeleteAnnouncementRequest = id => {
//   return dispatch => {
//     return callApi(`anouncement/${id}`, "DELETE").then(() => {
//       dispatch(
//         actFetchResourceSuccess({
//           message: "Bạn đã chỉnh sửa bài viết thành công!",
//           confirmTo: "/thong-bao-bai-viet"
//         })
//       );
//       dispatch(actGetAnnouncementRequest());
//     });
//   };
// };
