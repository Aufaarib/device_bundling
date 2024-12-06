import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

export const BasicInput = ({ label, type, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label style={{ color: "#000000B2", fontSize: "14px", fontWeight: 600 }}>
        {label}
      </label>
      <input
        type={type}
        title={label}
        style={{
          border: "1px solid grey",
          padding: "10px",
          borderRadius: "4px",
          color: "black",
          height: "24px",
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
      <label style={{ color: "#000000B2", fontSize: "14px", fontWeight: 600 }}>
        {label}
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid grey",
          height: "44px",
          // padding: "10px",
          borderRadius: "4px",
          color: "black",
        }}
      >
        <input
          type={isShowPw ? "text" : "password"}
          title="Password"
          style={{
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            outline: "none",
            color: "black",
            backgroundColor: "transparent",
            width: "100%",
            // height: "20px",
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
