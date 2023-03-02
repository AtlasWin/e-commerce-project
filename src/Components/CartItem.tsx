import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { removeFromCart } from "../Redux/Slices/cartSlice/cartSlice";
import { useAppDispatch } from "../Redux/store/store";

function CartItem({ item }) {
  const dispatch = useAppDispatch();

  return (
    <CardActionArea sx={{ margin: "20px 0" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: ["column", "column", "row"],
          padding: "0 2rem",
        }}
      >
        <CardMedia
          sx={{
            width: ["125px", "250px", "125px"],
            height: "auto",
            marginBottom: ["10px", "10px", "0"],
          }}
          component="img"
          image={item.images[0]}
        />
        <Typography variant="body1" component="div">
          {item.title}
        </Typography>
        <Typography variant="body1" component="div">
          Quantity: {item.quantity}
        </Typography>
        <Typography variant="body1" component="div">
          Price: {item.price * item.quantity} $
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: ["10px", "10px", "0"] }}
          onClick={() => dispatch(removeFromCart(item))}
        >
          Delete Product
        </Button>
      </CardContent>
    </CardActionArea>
  );
}

export default CartItem;
