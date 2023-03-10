import { RootState } from "./../../store/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProducts, getSingleProduct } from "../../../API/ProductsService";
import {
  AllProducts,
  Pagination,
  SingleProduct,
} from "../../../types/interfaces";

interface ProductsState {
  products: AllProducts[];
  product: SingleProduct;
  loading: boolean;
  error: string | any;
  totalPages: number;
  pagination: Pagination;
}

interface Products {
  limit: number;
  offset: number;
}

const initialState: ProductsState = {
  products: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    images: [],
  },
  loading: true,
  error: null,
  totalPages: 0,
  pagination: {
    page: 1,
    offset: 0,
    limit: 0,
  },
};

export const getAllAsyncProducts = createAsyncThunk(
  "products/getAllAsyncProducts",
  async ({ limit, offset }: Products, { rejectWithValue, dispatch }) => {
    const { setTotalPages } = productsSlice.actions;
    try {
      const response = await getAllProducts(limit, offset);
      if (limit === 0) {
        dispatch(setTotalPages(response.data.length));
        return response.data.slice(0, 10);
      } else {
        return response.data;
      }
    } catch (error: string | any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getEachAsyncProduct = createAsyncThunk(
  "products/getEachAsyncProduct",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getSingleProduct(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.error = payload;
    },
    setPage(state) {
      state.pagination.page = state.pagination.page + 1;
      state.pagination.offset = state.pagination.offset + 10;
    },
    setTotalPages(state, { payload }) {
      state.totalPages = Math.ceil(payload / 10);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAsyncProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllAsyncProducts.fulfilled,
      (state, { payload }: PayloadAction<AllProducts[]>) => {
        state.loading = false;
        state.products = [...state.products, ...payload];
        state.pagination.limit = 10;
      }
    );
    builder.addCase(
      getAllAsyncProducts.rejected,
      (state, { payload }: PayloadAction<string | any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
    builder.addCase(getEachAsyncProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getEachAsyncProduct.fulfilled,
      (state, { payload }: PayloadAction<SingleProduct>) => {
        state.loading = false;
        state.product = payload;
      }
    );
    builder.addCase(
      getEachAsyncProduct.rejected,
      (state, { payload }: PayloadAction<string | any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const getProductsFromState = (state: RootState) =>
  state.products.products;

export const getSingleProductFromState = (state: RootState) =>
  state.products.product;

export const getProductLoadingFromState = (state: RootState) =>
  state.products.loading;

export const getProductErrorFromState = (state: RootState) =>
  state.products.error;

export const getTotalPagesFromState = (state: RootState) =>
  state.products.totalPages;

export const getPaginationFromState = (state: RootState) =>
  state.products.pagination;

export const { setPage } = productsSlice.actions;

export default productsSlice.reducer;
