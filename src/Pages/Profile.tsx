import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getAuthUserFromState,
  setLogout,
} from "../Redux/Slices/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";
function Profile() {
  const user = useAppSelector(getAuthUserFromState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profileHandler = () => {
    dispatch(setLogout());
    navigate("/home");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        height: { md: "67vh", lg: "75vh", xl: "84vh" },
      }}
    >
      <Card
        sx={{
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardHeader title="Profile" />
        <CardMedia component="img" src={user.avatar} sx={{ width: "200px" }} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography variant="body1" component="div">
            Email: {user.email}
          </Typography>
          <Typography variant="body1" component="div">
            Role: {user.role}
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={profileHandler}>
          Logout
        </Button>
      </Card>
    </Box>
  );
}

export default Profile;
