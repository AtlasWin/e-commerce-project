import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, useParams } from "react-router-dom";
import NoLoginModal from "../Components/NoLoginModal";
import ProductModal from "../Components/ProductModal";
import { getEachAsyncProduct } from "../Redux/Slices/productsSlice/productsSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";

function ProductDetails() {
  const [visible, setVisible] = useState(false);
  const { id } = useParams() as any;
  const product = useAppSelector((state) => state.products.product);
  const isAuth = useAppSelector((state) => state.auth.token);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sliderData, setSliderData] = useState(product.images[0]);

  useEffect(() => {
    dispatch(getEachAsyncProduct(id));
  }, [id]);

  useEffect(() => {
    if (product.id) {
      setSliderData(product.images[0]);
    }
  }, [product]);

  const handleModalOpen = () => {
    setVisible(!visible);
  };

  const handleClick = (index: number) => {
    const slider = product.images[index];
    setSliderData(slider);
  };

  return (
    <>
      <Container
        sx={{
          height: {
            md: "80vh",
            lg: "80vh",
            xl: "85vh",
          },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            variant="contained"
            onClick={() => navigate(-1)}
            sx={{ margin: "20px 20px" }}
          >
            Back
          </Button>
        </Box>
        <Box
          sx={{
            width: ["300px", "450px", "750px", "800px", "1440px"],
          }}
        >
          <Card
            sx={{
              display: "flex",
              width: ["290px", "450px", "750px", "800px", "1440px"],
              flexDirection: ["column", "column", "row"],
            }}
          >
            <CardContent
              sx={{
                flex: "33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Carousel
                showThumbs={true}
                showArrows={false}
                onClickThumb={(index) => handleClick(index)}
              >
                {product.images.map((item, index) => (
                  <CardContent key={index}>
                    <img src={item} alt="image" />
                  </CardContent>
                ))}
              </Carousel>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "33%",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: ["1rem", "1.3rem", "1.5rem"],
                  marginBottom: "10px",
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: ["1rem"],
                  marginBottom: "10px",
                }}
              >
                {product.description}
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: ["1rem", "1.1rem", "1.3rem"],
                  fontWeight: "bold",
                }}
              >
                {product.price} $
              </Typography>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {/* <Button variant="text" onClick={() => navigate("/cart")}>
                    Your item already added, please check Cart
                  </Button> */}

                <Button variant="outlined" onClick={() => handleModalOpen()}>
                  Buy Now
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        </Box>
        {isAuth ? (
          <ProductModal
            visible={visible}
            setVisible={setVisible}
            product={product}
            sliderData={sliderData}
          />
        ) : (
          <NoLoginModal visible={visible} setVisible={setVisible} />
        )}
      </Container>
    </>
  );
}

export default ProductDetails;
