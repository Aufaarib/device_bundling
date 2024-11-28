import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../APIs/AuthAPI";
import { useAppContext } from "../shared/Context";
import Register from "./Register";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Login = ({ setIsOpen }) => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, setIsLoading } = useAppContext();
  const [register, setRegister] = useState(false);
  const [isShowPw, setIsShowPw] = useState(false);

  const onLogin = () => {
    setRegister(false);
    setIsLoading(true);
    PostLogin(email, password, setIsLoading);
    setIsOpen(false);
  };

  const onRegister = () => {
    setRegister(true);
    setIsLoading(true);
    PostLogin(email, password, setIsLoading);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        width: "100%",
        height: "100%",
        gap: "50px",
        // backgroundColor: "red",
        paddingTop: "65px",
        paddingBottom: "65px",
      }}
    >
      {register ? "" : <h1 style={{ color: "black" }}>Sign in</h1>}

      {!register ? (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "100%",
            }}
          >
            <button
              onClick={() => onLogin()}
              style={{ color: "white", backgroundColor: "#007DC1" }}
            >
              {isLoading ? <CircularProgress color="black" /> : ""}
              Login
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <hr
                style={{
                  height: 0,
                  width: "85px",
                  border: "0.5px solid #C8C8C8",
                }}
              />
              <p style={{ color: "#000000B2", fontSize: "14px" }}>OR</p>
              <hr
                style={{
                  height: 0,
                  width: "85px",
                  border: "0.5px solid #C8C8C8",
                }}
              />
            </div>
            <button
              onClick={() => setRegister(true)}
              style={{
                fontWeight: 600,
                color: "#007DC1",
                border: "1px solid #007DC1",
                backgroundColor: "white",
              }}
            >
              Register
            </button>
          </div>
        </>
      ) : (
        <Register setIsOpen={setIsOpen} setRegister={setRegister} />
      )}
    </div>
  );
};

export default Login;
