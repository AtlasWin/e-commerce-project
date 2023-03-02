import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { addToCart } from "../Redux/Slices/cartSlice/cartSlice";
import { useAppDispatch } from "../Redux/store/store";
import ItemQuantity from "./Common/ItemQuantity";
import { useState } from "react";

function ModalItem({ product, setVisible, visible, sliderData }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleClose = () => {
    dispatch(addToCart({ ...product, images: [sliderData], quantity }));
    setVisible(!visible);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: ["300px", "500px"],
            height: ["375px", "450px"],
          }}
        >
          <CardMedia
            component="img"
            image={sliderData}
            sx={{
              width: ["175px", "275px"],
              height: "auto",
              margin: ["0"],
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: ["0.8rem", "1rem"] }}
            >
              {product.description}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: ["0.8rem", "1rem"],
                fontWeight: "bold",
                marginBottom: ["10px"],
              }}
            >
              {product.price} $
            </Typography>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "flex-end",
                padding: ["0", "8px", "16px"],
                marginBottom: ["10px"],
              }}
            >
              <ItemQuantity setQuantity={setQuantity} quantity={quantity} />
            </CardContent>
            <Button variant="outlined" onClick={() => handleClose()}>
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default ModalItem;
