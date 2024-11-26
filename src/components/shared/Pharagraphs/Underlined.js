import { Box, Typography } from "@mui/material";

const Underlined = ({ label, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        pb: "10px",
        width: "340px",
      }}
    >
      <Typography color="black" fontSize={14}>
        {label}
      </Typography>
      <Typography color="black" fontSize={14}>
        {value}
      </Typography>
    </Box>
  );
};

export default Underlined;
