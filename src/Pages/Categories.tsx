import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../Components/Common/Error";
import Footer from "../Components/Common/Footer";
import Loading from "../Components/Common/Loading";
import { getAllAsyncCategories } from "../Redux/Slices/categoriesSlice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";

function Categories() {
  const categories = useAppSelector((state) => state.categories.categories);
  const error = useAppSelector((state) => state.categories.error);
  const loading = useAppSelector((state) => state.categories.loading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAsyncCategories());
  }, []);

  return (
    <>
      <Error error={error} />
      {<Loading loading={loading} /> && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1 }}
          columns={[4, 8, 12]}
          columnGap={20}
        >
          {categories.map((el) => (
            <Card
              sx={{
                width: "300px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={el.id}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={el.image}
                  alt={`picture ${el.id}`}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {el.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => navigate(`/categories/${el.id}`)}
              >
                Learn More
              </Button>
            </Card>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Categories;
