import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, PostLogin, PostOTP, PostResendOTP } from "../APIs/AuthAPI";
import { useAppContext } from "../shared/Context";

const OTP = ({ setIsOpen, setRegister }) => {
  // const navigate = useNavigate();
  const [pData, setPData] = useState("");
  const [code, setCode] = useState("");
  const [flag, setFlag] = useState("register");
  const { isLoading, setIsLoading } = useAppContext();

  const onVerify = () => {
    setIsLoading(true);
    PostOTP(pData?.email, code, flag, setIsLoading, setIsOpen);
  };

  const onReVerify = () => {
    setIsLoading(true);
    PostResendOTP(pData?.email, flag, setIsLoading);
  };

  useEffect(() => {
    getProfile(setPData, setIsLoading);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        // width: "100%",
        // height: "100%",
        gap: "70px",
        // backgroundColor: "red",
        // paddingTop: "65px",
        // paddingBottom: "65px",
      }}
    >
      <h1 style={{ color: "black" }}>Verify OTP CODE</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label style={{ color: "black" }}>Code</label>
          <input
            type="text"
            title="Code"
            style={{
              border: "1px solid grey",
              padding: "10px",
              borderRadius: "10px",
              color: "black",
            }}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => onVerify()} style={{ color: "black" }}>
          {isLoading ? <CircularProgress color="black" /> : ""}
          Verify
        </button>
        <button onClick={() => setRegister(false)} style={{ color: "black" }}>
          Back to Login
        </button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <label style={{ color: "black", fontSize: "14px" }}>
          Tidak Menerima Code?
        </label>
        <button onClick={() => onReVerify()} style={{ color: "black" }}>
          Kirim Ulang Code
        </button>
      </div>
    </div>
  );
};

export default OTP;
