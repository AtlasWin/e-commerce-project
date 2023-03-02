import CarouselSlider from "../Components/CarouselSlider";
import Categories from "./Categories";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CarouselSlider />
      <Categories />
    </Box>
  );
}

export default Home;
