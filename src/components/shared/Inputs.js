import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

export const BasicInput = ({ label, type, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label style={{ color: "black" }}>{label}</label>
      <input
        type={type}
        title={label}
        style={{
          border: "1px solid grey",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
        }}
        onChange={onChange}
      />
    </div>
  );
};

export const PasswordInput = ({ label, onChange }) => {
  const [isShowPw, setIsShowPw] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <label style={{ color: "black" }}>{label}</label>
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
          onChange={onChange}
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
          {!isShowPw ? <IconEye color="black" /> : <IconEyeOff color="black" />}
        </button>
      </div>
    </div>
  );
};
