import { Typography } from "@mui/material";
import { CustomLink } from "../Styles";
import ModalWrapper from "./Common/Modal/ModalWrapper";

function NoLoginModal({ visible, setVisible }) {
  return (
    <>
      <ModalWrapper visible={visible} setVisible={setVisible}>
        <Typography sx={{ textAlign: "center" }}>
          Unfortunately, only Authorized Users can Buy, please
        </Typography>
        <CustomLink to="/login">Log In</CustomLink>
      </ModalWrapper>
    </>
  );
}

export default NoLoginModal;
