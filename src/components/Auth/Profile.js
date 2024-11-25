import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../shared/Context";
import { getProfile } from "../APIs/AuthAPI";
import { IconMail, IconUser } from "@tabler/icons-react";

const Profile = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useAppContext();
  const { token, setToken } = useAppContext();

  useEffect(() => {
    getProfile(setData, setIsLoading);
  }, []);

  const onLogout = () => {
    window.location.reload();
    localStorage.removeItem("TOKEN");
    setToken("");
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
        gap: "35px",
        // backgroundColor: "red",
        paddingTop: "45px",
      }}
    >
      <h1 style={{ color: "black" }}>Profile</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <IconUser color="black" /> FullName :{" "}
          </label>
          <label
            style={{
              color: "black",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {data.full_name}
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <IconMail color="black" /> Email :{" "}
          </label>
          <label
            style={{
              color: "black",
              backgroundColor: "lightgray",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {data.email}{" "}
          </label>
        </div>
      </div>
      <div>
        <button onClick={() => onLogout()} style={{ color: "black" }}>
          {isLoading ? <CircularProgress color="black" /> : ""}
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Profile;
