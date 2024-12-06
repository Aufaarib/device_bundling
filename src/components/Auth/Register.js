import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin, PostRegister } from "../APIs/AuthAPI";
import { useAppContext } from "../shared/Context";
import OTP from "./OTP";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { BasicInput, PasswordInput } from "../shared/Inputs";

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
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Sign up
          </p>
          <BasicInput
            label={"Fullname"}
            type={"text"}
            onChange={(e) => setFullName(e.target.value)}
          />
          <BasicInput
            label={"NIK"}
            type={"number"}
            onChange={(e) => setNIK(e.target.value)}
          />
          <BasicInput
            label={"Phone Number"}
            type={"number"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <BasicInput
            label={"Alternative Phone Number"}
            type={"number"}
            onChange={(e) => setEmergencyCall(e.target.value)}
          />
          <BasicInput
            label={"Email"}
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => onRegister()}
            style={{ color: "white", backgroundColor: "#007DC1" }}
          >
            {isLoading ? <CircularProgress color="black" /> : ""}
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
