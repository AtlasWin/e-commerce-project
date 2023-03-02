import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../Redux/store/store";
import CartItem from "../Components/CartItem";
import { totalCount, totalQuantity } from "../Redux/Slices/cartSlice/cartSlice";

function Cart() {
  const cart = useAppSelector((state) => state.cart.cart);
  const total = useAppSelector(totalCount);
  const itemsQuantity = useAppSelector(totalQuantity);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ margin: "20px 20px" }}
          onClick={() => navigate("/products")}
        >
          Back to shopping
        </Button>
      </Box>
      <div>
        {cart.length ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: { md: "67vh", lg: "67vh", xl: "79vh" },
            }}
          >
            <Card
              sx={{
                dispay: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "85%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  textAlign: "center",
                  padding: ["0.5rem 0", "1rem 0"],
                }}
                component="div"
              >
                Shopping Cart
              </Typography>
              <CardContent sx={{ padding: ["0", "8px", "16px"] }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    textAlign: ["center", "center"],
                  }}
                >
                  Item x {itemsQuantity}
                </Typography>
              </CardContent>
              {cart.map((item) => (
                <div key={item.id}>
                  <CartItem item={item} />
                </div>
              ))}
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: ["center", "center", "flex-end"],
                  flexDirection: ["column", "column", "row"],
                  alignItems: ["center", "center"],
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    marginRight: ["0", "0", "100px"],
                    textAlign: ["center", "center"],
                  }}
                >
                  Total Price: {total} $
                </Typography>
                <Button variant="contained">Proceed with payment</Button>
              </CardContent>
            </Card>
          </Box>
        ) : (
          <Typography
            variant="h2"
            component="div"
            sx={{
              textAlign: "center",
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: ["2rem", "4rem"],
            }}
          >
            There are no products in your shopping cart
          </Typography>
        )}
      </div>
    </>
  );
}

export default Cart;
