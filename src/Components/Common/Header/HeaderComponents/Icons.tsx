import { Box, IconButton, Badge } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CustomLink } from "../../../../Styles";
import AvatarIcon from "./AvatarIcon";

function Icons({ itemsQuantity }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <AvatarIcon />
      <IconButton
        size="large"
        color="inherit"
        sx={{ padding: ["5px", "8px", "17px"] }}
      >
        <InventoryIcon />
      </IconButton>
      <CustomLink to="/cart" style={{ color: "#000" }}>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          sx={{
            padding: ["5px", "8px", "17px"],
            marginRight: ["0", "5px", "0"],
          }}
        >
          <Badge color="error" badgeContent={itemsQuantity}>
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </CustomLink>
    </Box>
  );
}

export default Icons;
