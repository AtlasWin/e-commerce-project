import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import ModalItem from "./ModalItem";

function ProductModal({ visible, setVisible, product, sliderData }) {
  return (
    <>
      <Dialog
        open={visible}
        onClose={() => setVisible(false)}
        maxWidth="sm"
        sx={{ overflow: "hidden" }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            padding: ["5px 0", "8px 12px", "16px 24px"],
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ fontSize: ["1rem", "1.3rem", "2.2rem"], fontWeight: "bold" }}
          >
            {product.title}
          </Typography>
        </DialogTitle>
        <ModalItem
          product={product}
          visible={visible}
          setVisible={setVisible}
          sliderData={sliderData}
        />
      </Dialog>
    </>
  );
}

export default ProductModal;
