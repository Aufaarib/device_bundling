import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin, PostRegister } from "../APIs/AuthAPI";
import { useAppContext } from "../shared/Context";
import OTP from "./OTP";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Register = ({ setIsOpen, setRegister }) => {
  // const navigate = useNavigate();
  const [full_name, setFullName] = useState("");
  const [nik, setNIK] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [emergency_call, setEmergencyCall] = useState("");
  const [role, setRole] = useState("user");
  const [isOTP, setOTP] = useState(false);
  const [isShowPw, setIsShowPw] = useState(false);
  const { isLoading, setIsLoading } = useAppContext();

  const onRegister = () => {
    setIsLoading(true);
    PostRegister(
      full_name,
      nik,
      email,
      password,
      phone_number,
      emergency_call,
      role,
      setIsLoading,
      setOTP
    );
    // setIsOpen(false);
  };

  return (
    <div>
      {isOTP ? (
        <OTP setIsOpen={setIsOpen} setRegister={setRegister} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "start",
            // width: "100%",
            // height: "100%",
            gap: "60px",
            // backgroundColor: "red",
            // paddingTop: "65px",
            // paddingBottom: "65px",
          }}
        >
          <h1 style={{ color: "black" }}>Register</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>Nama Lengkap</label>
                <input
                  type="text"
                  title="Nama Lengkap"
                  style={{
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>NIK</label>
                <input
                  type="text"
                  title="NIK"
                  style={{
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  onChange={(e) => setNIK(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>No. HP</label>
                <input
                  type="text"
                  title="NIK"
                  style={{
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>No. Hp Darurat</label>
                <input
                  type="text"
                  title="NIK"
                  style={{
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  onChange={(e) => setEmergencyCall(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>Email</label>
                <input
                  type="text"
                  title="Email"
                  style={{
                    border: "1px solid grey",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label style={{ color: "black" }}>Password</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px solid grey",
                    // padding: "10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  <input
                    type={isShowPw ? "text" : "password"}
                    title="Password"
                    style={{
                      border: "none",
                      padding: "10px",
                      borderRadius: "10px",
                      outline: "none",
                      color: "black",
                      backgroundColor: "transparent",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={() => setIsShowPw(!isShowPw)}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {!isShowPw ? (
                      <IconEye color="black" />
                    ) : (
                      <IconEyeOff color="black" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => onRegister()} style={{ color: "black" }}>
              {isLoading ? <CircularProgress color="black" /> : ""}
              Submit
            </button>
            <button
              onClick={() => setRegister(false)}
              style={{ color: "black" }}
            >
              Back to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
