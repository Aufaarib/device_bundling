import { ToastFailed } from "../../shared/Messages/Toasts";

export const ErrorHandlings = (errCode) => {
  // const code = errCode;
  console.log(errCode.status);

  if (errCode.status == 401) {
    localStorage.removeItem("TOKEN");
    ToastFailed(`Koneksi Bermasalah`);
    // window.location.href = "/pages/auth/login";
  } else if (errCode.status == 400) {
    // } else if (errCode.code === "ERR_NETWORK") {
    ToastFailed(`Bad Request`);
    //   // AlertMessage("Error", "Connection Failed", "Try Again", "error");
  } else if (errCode.status == 404) {
    ToastFailed("Data Tidak Ditemukan");
    // AlertMessage(
    //   "Error",
    //   "Something Wrong, Please Try Again",
    //   "Try Again",
    //   "error"
    // );
  }
  // else {
  //   ToastFailed(errCode.response.data.error);
  // }

  return null;
};
