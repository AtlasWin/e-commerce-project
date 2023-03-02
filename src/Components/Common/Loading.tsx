import Box from "@mui/material/Box";
import { InfinitySpin } from "react-loader-spinner";

function Loading({ loading }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {loading && <InfinitySpin width="300" color="black" />}
    </Box>
  );
}

export default Loading;
