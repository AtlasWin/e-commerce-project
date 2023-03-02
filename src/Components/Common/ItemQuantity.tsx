import { Typography, Box, Button } from "@mui/material";

function ItemQuantity({ quantity, setQuantity }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            minWidth: ["20px", "40px"],
            padding: "0.3rem 0",
            textAlign: "center",
            lineHeight: "1rem",
          }}
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity === 10}
        >
          +
        </Button>
        <Typography
          component="div"
          sx={{ padding: "0 1rem", fontSize: ["1rem", "1.2rem"] }}
        >
          {quantity}
        </Typography>
        <Button
          variant="contained"
          sx={{
            minWidth: ["20px", "40px"],
            padding: "0.3rem 0",
            textAlign: "center",
            lineHeight: "1rem",
          }}
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 0}
        >
          -
        </Button>
      </Box>
    </div>
  );
}

export default ItemQuantity;
