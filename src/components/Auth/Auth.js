import { Box, Modal } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import { useAppContext } from "../shared/Context";
import { useEffect, useState } from "react";

const Auth = ({ isOpen = false, setIsOpen }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("TOKEN"));
  }, [token]);

  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // width: "a",
          bgcolor: "white",
          border: "none",
          borderRadius: "22px",
          outline: "none",
          flexDirection: "column",
          overflow: "scroll",
          // minHeight: "400px",
          py: "30px",
          // paddingX: "80px",
          maxHeight: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            // paddingTop: "5px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <hr
            style={{
              height: 0,
              width: "100%",
              border: "0.5px solid #C8C8C8",
            }}
          />
          <div>
            <svg
              width="88"
              height="87"
              viewBox="0 0 96 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="48" cy="47.5" r="47.5" fill="white" />
              <circle
                cx="48"
                cy="47.5"
                r="46.5"
                stroke="black"
                stroke-opacity="0.15"
                stroke-width="2"
              />
              <path
                d="M61.3204 27.9138H50.8455H45.1547H34.6798C32.4733 27.9138 30.6117 29.556 30.3365 31.7453L26.7314 60.4183C26.4027 63.0321 28.4404 65.342 31.0747 65.342H45.1547H51.0644H64.9255C67.5599 65.342 69.5975 63.0321 69.2689 60.4183L65.6638 31.7453C65.3885 29.556 63.5269 27.9138 61.3204 27.9138Z"
                fill="#F5CD07"
              />
              <path
                d="M54.7854 24.1929V21.8947C54.7854 18.0868 51.6986 15 47.8908 15V15C44.0829 15 40.9961 18.0868 40.9961 21.8947V24.1929"
                stroke="#243B7F"
                stroke-width="3.72093"
                stroke-linecap="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.747 42.5787C41.4173 42.5787 40.3394 43.6566 40.3394 44.9863V66.5983H55.6608V44.9863C55.6608 43.6566 54.5829 42.5787 53.2532 42.5787H42.747Z"
                fill="white"
              />
              <path
                d="M40.3394 66.5983H39.0261V67.9115H40.3394V66.5983ZM55.6608 66.5983V67.9115H56.9741V66.5983H55.6608ZM41.6526 44.9863C41.6526 44.3819 42.1426 43.8919 42.747 43.8919V41.2654C40.692 41.2654 39.0261 42.9313 39.0261 44.9863H41.6526ZM41.6526 66.5983V44.9863H39.0261V66.5983H41.6526ZM40.3394 67.9115H55.6608V65.285H40.3394V67.9115ZM54.3476 44.9863V66.5983H56.9741V44.9863H54.3476ZM53.2532 43.8919C53.8576 43.8919 54.3476 44.3819 54.3476 44.9863H56.9741C56.9741 42.9313 55.3082 41.2654 53.2532 41.2654V43.8919ZM42.747 43.8919H53.2532V41.2654H42.747V43.8919Z"
                fill="white"
              />
              <rect
                x="41.8716"
                y="44.1108"
                width="12.0383"
                height="21.1238"
                rx="1.31327"
                fill="#243B7F"
              />
              <circle cx="44.0931" cy="46.5514" r="0.908551" fill="white" />
            </svg>
          </div>
          <hr
            style={{
              height: 0,
              width: "100%",
              border: "0.5px solid #C8C8C8",
            }}
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "25px",
            // alignItems: "center",/
            paddingLeft: "35px",
            paddingRight: "35px",
            // paddingBottom: "35px",
          }}
        >
          {token ? (
            <Profile setIsOpen={setIsOpen} />
          ) : (
            <Login setIsOpen={setIsOpen} />
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default Auth;
