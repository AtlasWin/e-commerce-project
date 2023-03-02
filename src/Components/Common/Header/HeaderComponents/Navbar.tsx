import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../../Redux/store/store";
import { totalQuantity } from "../../../../Redux/Slices/cartSlice/cartSlice";
import Select from "./Select";
import Drawer from "./Drawer";
import Button from "@mui/material/Button";
import { CustomLink } from "../../../../Styles";
import CustomInput from "./CustomInput";
import Icons from "./Icons";

export const Navbar = () => {
  const itemsQuantity = useAppSelector(totalQuantity);
  const isAuth = useAppSelector((state) => state.auth.token);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
          padding: ["0 7px", "0", "0 15px"],
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          width: ["320px", "768px", "1024px", "1440px", "100%"],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: [0.5, "33%"],
          }}
        >
          <Drawer />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              padding: ["0", "0 8px"],
            }}
          >
            Atlas Shop
          </Typography>
        </Box>
        <Box sx={{ flex: [1, "33%"] }}>
          <CustomInput />
          {/* <Select /> */}
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "flex" },
            alignItems: "center",
            flex: [1, "33%"],
            justifyContent: "flex-end",
          }}
        >
          {isAuth ? (
            <Icons itemsQuantity={itemsQuantity} />
          ) : (
            <CustomLink to="/registration">
              <Button
                variant="contained"
                sx={{
                  padding: ["0", "3px 8px", "6px 16px"],
                }}
              >
                Sign In
              </Button>
            </CustomLink>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
