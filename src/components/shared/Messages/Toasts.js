import Swal from "sweetalert2";

export const Toast = (msg) => {
  const Toast = Swal.mixin({
    allowOutsideClick: false,
    toast: true,
    position: "top",
    customClass: {
      popup: "toast-padding-top toast-z-index",
    },
    showConfirmButton: false,
    timer: 5000,
    // timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: `${msg || "Sukses"}`,
  });
};

export const ToastFailed = (err) => {
  const Toast = Swal.mixin({
    allowOutsideClick: false,
    toast: true,
    position: "top",
    customClass: {
      popup: "toast-padding-top toast-z-index",
    },
    showConfirmButton: false,
    timer: 5000,
    // timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "error",
    title: "Gagal",
    text: `${err || ""}`,
  });
};
