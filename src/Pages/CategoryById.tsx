import { Button, Box } from "@mui/material";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../Components/Common/Error";
import List from "../Components/Common/List";
import Loading from "../Components/Common/Loading";
import {
  getAsyncCategoryProducts,
  getCategoryErrorFromState,
  getCategoryLoadingFromState,
  getGategoryProductsFromState,
  setReset,
} from "../Redux/Slices/categoriesSlice/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";

function CategoryById() {
  const { id } = useParams() as any;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const categoryProducts = useAppSelector(getGategoryProductsFromState);
  const error = useAppSelector(getCategoryErrorFromState);
  const loading = useAppSelector(getCategoryLoadingFromState);

  useEffect(() => {
    dispatch(getAsyncCategoryProducts(id));

    return () => {
      dispatch(setReset());
    };
  }, [id]);

  const clearItems = () => {
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          onClick={() => clearItems()}
          sx={{ margin: "20px 20px" }}
        >
          Go back
        </Button>
      </Box>
      <Error error={error} />
      <List
        data={categoryProducts}
        isLoading={loading}
        page={categoryProducts[0]?.category.name}
        param="products"
      />

      <Loading loading={loading} />
    </>
  );
}

export default CategoryById;
