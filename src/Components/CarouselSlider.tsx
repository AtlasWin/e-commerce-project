import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselSlider() {
  const imagesURL: string[] = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmclMjBiYW5uZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBiYW5uZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwYmFubmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob3BwaW5nJTIwYmFubmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "static",
        maxWidth: 800,
        marginTop: "20px",
      }}
    >
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
      >
        {imagesURL.map((item, index) => (
          <div key={index}>
            <img className="carousel_img" src={item} alt="image" />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselSlider;
