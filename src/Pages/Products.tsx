import { useEffect, useRef } from "react";
import { useObserver } from "../Hooks/useObserver";
import {
  getAllAsyncProducts,
  setPage,
} from "../Redux/Slices/productsSlice/productsSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store/store";
import List from "../Components/Common/List";
import Error from "../Components/Common/Error";
import Loading from "../Components/Common/Loading";

function Products() {
  const products = useAppSelector((state) => state.products.products);
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);
  const totalPages = useAppSelector((state) => state.products.totalPages);
  const { offset, limit, page } = useAppSelector(
    (state) => state.products.pagination
  );
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
