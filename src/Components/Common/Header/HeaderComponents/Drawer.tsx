import {
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/store/store";
import {
  getAllAsyncCategories,
  getCategoriesFromState,
} from "../../../../Redux/Slices/categoriesSlice/categoriesSlice";
import Typography from "@mui/material/Typography";
import { CustomLink } from "../../../../Styles";
type Anchor = "left";

function MenuDrawer() {
  const categories = useAppSelector(getCategoriesFromState);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    left: false,
  });

  useEffect(() => {
    if (!categories) {
      dispatch(getAllAsyncCategories());
    }
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        width: "150px",
      }}
    >
      <List>
        <CustomLink to="/">
          <Typography sx={{ padding: "8px 16px" }}>Home</Typography>
        </CustomLink>
        <Divider />

        <CustomLink to="/products">
          <Typography sx={{ padding: "8px 16px" }}>All Products</Typography>
        </CustomLink>
        <Divider />
        {categories.map((item) => (
          <ListItem key={item.id}>
            <CustomLink to={`/categories/${item.id}`}>
              <ListItemText primary={item.name}></ListItemText>
            </CustomLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer("left", true)}
        sx={{ padding: "6px 10px", minWidth: "30px" }}
      >
        <MenuIcon sx={{ color: "#000" }} />
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        sx={{
          [`&  .MuiDrawer-paper `]: {
            position: "absolute",
            top: "64px",
          },
        }}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
