import { useEffect, useRef } from "react";
import { useObserver } from "../Hooks/useObserver";
import {
  getAllAsyncProducts,
  getPaginationFromState,
  getProductErrorFromState,
  getProductLoadingFromState,
  getProductsFromState,
  getTotalPagesFromState,
  setPage,
} from "../Redux/Slices/productsSlice/productsSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";
import List from "../Components/Common/List";
import Error from "../Components/Common/Error";
import Loading from "../Components/Common/Loading";

function Products() {
  const products = useAppSelector(getProductsFromState);
  const loading = useAppSelector(getProductLoadingFromState);
  const error = useAppSelector(getProductErrorFromState);
  const totalPages = useAppSelector(getTotalPagesFromState);
  const { offset, limit, page } = useAppSelector(getPaginationFromState);
  const dispatch = useAppDispatch();
  const lastElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(getAllAsyncProducts({ limit, offset }));
  }, [offset]);

  useObserver(lastElement, page < totalPages, loading, () => {
    dispatch(setPage());
  });

  return (
    <>
      <Error error={error} />

      <List
        data={products}
        isLoading={loading}
        page="All Products"
        param="products"
      />

      <Loading loading={loading} />

      {!loading && <div className="pagination_border" ref={lastElement}></div>}
    </>
  );
}

export default Products;
