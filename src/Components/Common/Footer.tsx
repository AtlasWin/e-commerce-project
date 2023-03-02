import { Box, Typography, Button, Divider, Stack } from "@mui/material";

function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Divider sx={{ marginTop: "20px" }} />
      <Box
        sx={{
          dispay: "flex",
          justifyContent: "space-between",
          padding: ["0 8px", "0 20px"],
          height: "20px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: ["0.8rem", "1rem"] }}
          >
            Created by Mykyta Chumak, 2023
          </Typography>

          <Button
            onClick={handleScroll}
            sx={{
              color: "#000",
              textDecoration: ["underline"],
              fontSize: ["0.6rem", "1rem"],
            }}
          >
            Back to Top
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
