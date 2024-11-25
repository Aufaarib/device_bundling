import { Box, Typography } from "@mui/material";

const Underlined = ({ label, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        borderBottom: "1.5px solid black",
        pb: "10px",
        width: "270px",
      }}
    >
      <Typography color="black" fontSize={16}>
        {label}
      </Typography>
      <Typography color="black" fontSize={16}>
        {value}
      </Typography>
    </Box>
  );
};

export default Underlined;
