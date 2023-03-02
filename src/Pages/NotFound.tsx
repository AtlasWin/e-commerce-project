import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "88vh",
        }}
      >
        <Typography variant="h1" component="div">
          Page not found 404
        </Typography>
      </Box>
    </div>
  );
}

export default NotFound;
