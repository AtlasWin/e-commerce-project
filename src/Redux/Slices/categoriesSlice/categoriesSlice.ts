import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  categoriesService,
  singleCategoryProducts,
} from "../../../API/CategoriesService";
import { Category, CategoryProducts } from "../../../types/interfaces";
import { RootState } from "../../store/store";

interface CategoryState {
  categories: Category[];
  categoryProducts: CategoryProducts[];
  loading: boolean;
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
    builder.addCase(
      getAllAsyncCategories.fulfilled,
      (state, { payload }: PayloadAction<Category[]>) => {
        state.loading = false;
        state.categories = payload;
      }
    );
    builder.addCase(
      getAllAsyncCategories.rejected,
      (state, { payload }: PayloadAction<string | any>) => {
        state.loading = false;
        state.error = payload;
      }
    );

    builder.addCase(getAsyncCategoryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAsyncCategoryProducts.fulfilled,
      (state, { payload }: PayloadAction<CategoryProducts[]>) => {
        state.loading = false;
        state.categoryProducts = payload;
      }
    );
    builder.addCase(
      getAsyncCategoryProducts.rejected,
      (state, { payload }: PayloadAction<string | any>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const getCategoriesFromState = (state: RootState) =>
  state.categories.categories;

export const getGategoryProductsFromState = (state: RootState) =>
  state.categories.categoryProducts;

export const getCategoryLoadingFromState = (state: RootState) =>
  state.categories.loading;

export const getCategoryErrorFromState = (state: RootState) =>
  state.categories.error;

export const { setReset } = categoriesSlice.actions;

export default categoriesSlice.reducer;
