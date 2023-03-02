import { Dialog, DialogTitle, Typography } from "@mui/material";
import { CustomLink } from "../Styles";

function NoLoginModal({ visible, setVisible }) {
  return (
    <>
      <Dialog
        open={visible}
        onClose={() => setVisible(false)}
        maxWidth="sm"
        sx={{
          overflow: "hidden",
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Unfortunately, only Authorized Users can Buy, please
          </Typography>
          <CustomLink to="/login">Log In</CustomLink>
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default NoLoginModal;
