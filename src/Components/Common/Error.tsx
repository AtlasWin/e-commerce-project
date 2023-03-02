import Typography from "@mui/material/Typography";

function Error({ error }) {
  return (
    <div>
      {error && (
        <Typography variant="h3" component="div">
          An error occurs while loading
        </Typography>
      )}
    </div>
  );
}

export default Error;
