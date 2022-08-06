import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeleteCat, GetAll } from "./categoriesAPI";

const initialState = {
  categories: [],
  datachanged: "",
};

//craete product
export const createcategory = createAsyncThunk(
  "categories/create",
  async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
  }
);

//get all  categories
export const getcategories = createAsyncThunk(
  "categories/findall",
  async () => {
    console.log();
    const response = await GetAll();
    return response.data;
  }
);

//delete category by id
export const deleteactegory = createAsyncThunk(
  "categories/delete",
  async (id) => {
    
    const response = await DeleteCat(id);
    return response.data;
  }
);



export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createcategory.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
    });

    builder.addCase(createcategory.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = "success";
    });

    builder.addCase(getcategories.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
    });

    builder.addCase(getcategories.fulfilled, (state, action) => {
      console.log(action.payload);
      state.categories = action.payload.data;
      state.datachanged = "success";
    });

    builder.addCase(deleteactegory.pending, (state, action) => {
      console.log(action.payload);
      state.datachanged = "loading";
    });

    builder.addCase(deleteactegory.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = "success";
    });

  },

 
});

export const {} = categoriesSlice.actions;

export const selectcategories = (state) => state.categories.categories;
export const selectdatachanged = (state) => state.categories.datachanged;

export default categoriesSlice.reducer;
