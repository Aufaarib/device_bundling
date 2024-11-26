import { Button } from "@mui/material";

const BreadCrumbsButton = ({ title, href }) => {
  return (
    <Button
      key="2"
      sx={{
        p: 0,
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 400,
        color: "#00000099",
        ":hover": { color: "blue" },
      }}
      href={href}
    >
      {title}
    </Button>
  );
};

export default BreadCrumbsButton;
