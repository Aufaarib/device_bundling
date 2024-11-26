import { Box, Breadcrumbs } from "@mui/material";
import { IconChevronCompactRight, IconChevronRight } from "@tabler/icons-react";

const BreadCrumbs = ({ breadCrumbs = [] }) => {
  return (
    <>
      <Box sx={{ px: "65px", py: "20px" }}>
        <Breadcrumbs
          separator={<IconChevronRight color="black" size={20} />}
          aria-label="breadcrumb"
        >
          {breadCrumbs}
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default BreadCrumbs;
