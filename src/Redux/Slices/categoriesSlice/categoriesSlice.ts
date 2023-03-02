import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  categoriesService,
  singleCategoryProducts,
} from "../../../API/CategoriesService";
import { Category, CategoryProducts } from "../../../types/interfaces";

interface CategoryState {
  categories: Category[];
  categoryProducts: CategoryProducts[];
  loading: Boolean;
  error: string | any;
}

const initialState: CategoryState = {
  categories: [],

  categoryProducts: [],
  loading: false,
  error: "",
};

export const getAllAsyncCategories = createAsyncThunk(
  "categories/getAllAsyncCategories",
  async (_) => {
    const { setError } = categoriesSlice.actions;
    try {
      const response = await categoriesService();
      return response.data;
    } catch (error) {
      return setError(error);
    }
  }
);

export const getAsyncCategoryProducts = createAsyncThunk(
  "categories/getAsyncCategoryProducts",
  async (id: number) => {
    const { setError } = categoriesSlice.actions;
    try {
      const response = await singleCategoryProducts(id);
      return response.data;
    } catch (error) {
      return setError(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.error = payload;
    },
    setReset(state) {
      state.categoryProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllAsyncCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllAsyncCategories.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    });
    builder.addCase(getAllAsyncCategories.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(getAsyncCategoryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAsyncCategoryProducts.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.categoryProducts = payload;
      }
    );
    builder.addCase(getAsyncCategoryProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setReset } = categoriesSlice.actions;

export default categoriesSlice.reducer;
