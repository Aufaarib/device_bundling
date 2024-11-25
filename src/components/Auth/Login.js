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
      {register ? "" : <h1 style={{ color: "black" }}>LOGIN</h1>}

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
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => onLogin()} style={{ color: "black" }}>
              {isLoading ? <CircularProgress color="black" /> : ""}
              Login
            </button>
            <button
              onClick={() => setRegister(true)}
              style={{ color: "black" }}
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
