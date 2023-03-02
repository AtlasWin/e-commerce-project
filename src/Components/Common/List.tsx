import { Box, Typography, Grid } from "@mui/material";
import Item from "./Item";

function List({ data, isLoading, page, param }) {
  if (!data?.length && !isLoading) {
    return (
      <Typography variant="h3" component="div">
        {page} not found
      </Typography>
    );
  }
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", marginTop: "30px" }}
      >
        {page}
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: "20px", margin: "20px" }}
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Item item={item} param={param} key={item.id} />
        ))}
      </Grid>
    </>
  );
}

export default List;
