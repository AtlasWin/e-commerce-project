import { Dialog, DialogTitle } from "@mui/material";

function ModalWrapper({ children, visible, setVisible }) {
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
          {children}
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default ModalWrapper;
