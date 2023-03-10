import Typography from "@mui/material/Typography";
import ModalWrapper from "./Common/Modal/ModalWrapper";
import ModalItem from "./ModalItem";

function ProductModal({ visible, setVisible, product, sliderData }) {
  return (
    <>
      <ModalWrapper visible={visible} setVisible={setVisible}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontSize: ["1rem", "1.3rem", "2.2rem"], fontWeight: "bold" }}
        >
          {product.title}
        </Typography>
        <ModalItem
          product={product}
          visible={visible}
          setVisible={setVisible}
          sliderData={sliderData}
        />
      </ModalWrapper>
    </>
  );
}

export default ProductModal;
