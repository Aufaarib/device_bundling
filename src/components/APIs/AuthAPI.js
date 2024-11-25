import axios from "axios";
import { Toast } from "../shared/Messages/Toasts";
import { ErrorHandlings } from "./shared/ErrorHandlings";

export const PostResendOTP = (email, flag, setIsLoading, setIsOpen) => {
  axios
    .post(process.env.REACT_APP_API_KEY + `/auth/resend-otp`, {
      email: email,
      flag: flag,
    })
    .then((res) => {
      Toast("Berhasil Mengirim Ulang Code");
      localStorage.setItem("TOKEN", res.data.body.access_token);
      // Route();
      setIsLoading(false);
      // window.location.reload();
    })
    .catch((error) => {
      ErrorHandlings(error);
      setIsLoading(false);
    });
};

export const PostOTP = (email, code, flag, setIsLoading, setIsOpen) => {
  axios
    .post(process.env.REACT_APP_API_KEY + `/auth/verify-otp`, {
      email: email,
      code: code,
      flag: flag,
    })
    .then((res) => {
      setIsOpen(false);
      Toast("Berhasil Verifikasi");
      localStorage.setItem("TOKEN", res.data.body.access_token);
      // Route();
      setIsLoading(false);
      window.location.reload();
    })
    .catch((error) => {
      ErrorHandlings(error);
      setIsLoading(false);
    });
};

export const PostLogin = (email, password, setIsLoading, Route) => {
  axios
    .post(process.env.REACT_APP_API_KEY + `/auth/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      Toast("Berhasil Login");
      localStorage.setItem("TOKEN", res.data.body.access_token);
      // Route();
      setIsLoading(false);
      window.location.reload();
    })
    .catch((error) => {
      ErrorHandlings(error);
      setIsLoading(false);
    });
};

export const PostRegister = (
  full_name,
  nik,
  email,
  password,
  phone_number,
  emergency_call,
  role,
  setIsLoading,
  setOTP
) => {
  axios
    .post(process.env.REACT_APP_API_KEY + `/auth/register`, {
      full_name: full_name,
      nik: nik,
      email: email,
      password: password,
      phone_number: phone_number,
      emergency_call: emergency_call,
      role: role,
    })
    .then((res) => {
      Toast("Berhasil Registrasi");
      localStorage.setItem("TOKEN", res.data.body.access_token);
      // Route();
      setIsLoading(false);
      setOTP(true);
    })
    .catch((error) => {
      ErrorHandlings(error);
      setIsLoading(false);
    });
};

export const getProfile = (setData, setIsLoading) => {
  axios
    .get(process.env.REACT_APP_API_KEY + `/auth/profile/fetch`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      ErrorHandlings(err);
      setIsLoading(false);
    });
};
