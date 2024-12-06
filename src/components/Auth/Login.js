import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { PostLogin } from "../APIs/AuthAPI";
import { useAppContext } from "../shared/Context";
import { BasicInput, PasswordInput } from "../shared/Inputs";
import Register from "./Register";

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
    <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      {register ? (
        ""
      ) : (
        <>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Sign in
          </p>
        </>
      )}

      {!register ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              // padding: "20px",
              // paddingTop: "30px",
              // backgroundColor: "red",
              // width: "100%",
            }}
          >
            <BasicInput
              label={"Email"}
              type={"text"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              // width: "100%",
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
        </div>
      ) : (
        <Register setIsOpen={setIsOpen} setRegister={setRegister} />
      )}
      <a style={{ color: "#243B7F", fontSize: "12px" }} href="/">
        Forgot Password?
      </a>
    </div>
  );
};

export default Login;
