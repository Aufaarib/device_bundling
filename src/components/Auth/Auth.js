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
          justifyContent: "start",
          alignItems: "start",
          width: "fit-content",
          bgcolor: "white",
          border: "none",
          borderRadius: "22px",
          outline: "none",
          flexDirection: "column",
          overflow: "auto",
          minHeight: "400px",
          // paddingX: "80px",
        }}
      >
        {token ? (
          <Profile setIsOpen={setIsOpen} />
        ) : (
          <Login setIsOpen={setIsOpen} />
        )}
      </Box>
    </Modal>
  );
};

export default Auth;
