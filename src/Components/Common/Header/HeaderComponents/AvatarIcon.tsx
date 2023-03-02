import { Box, Avatar, Stack, MenuItem } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../Redux/store/store";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../../../../Redux/Slices/authSlice/authSlice";

function AvatarIcon() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleProfileMenu = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleMenuClose = () => {
    setVisible(false);
    navigate("/profile");
  };

  const renderMenu = (
    <Box sx={{ position: "absolute", top: "40px", right: "0px", zIndex: 999 }}>
      <Stack
        sx={{
          background: "#fff",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
      </Stack>
    </Box>
  );

  return (
    <Box
      onClick={handleProfileMenu}
      sx={{ position: "relative", padding: ["5px", "8px", "17px"] }}
    >
      <Avatar
        alt="user_icon"
        src={user.avatar}
        sx={{
          cursor: "pointer",
          width: ["30px", "40px"],
          height: ["30px", "40px"],
        }}
      />

      {visible && renderMenu}
    </Box>
  );
}

export default AvatarIcon;
