import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCarsThunkPerPage } from './carOperations';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: { field1: 0, field2: 0, field3: 0 },
    isOpenModal: false,
    favoriteList: [],
    currentPage: 1,
    itemsOnPage: 8,
    totalPages: 1,
  },
  reducers: {
    changeModalWindow: (state, { payload }) => {
      state.isOpenModal = !state.isOpenModal;
    },
    addToFavoriteList: (state, { payload }) => {
      state.favoriteList.push(payload);
    },
    removeFromFavoriteList: (state, { payload }) => {
      state.favoriteList = state.favoriteList.filter(
        item => item.id !== payload.id
      );
    },
    incrementPage: (state, { payload }) => {
      state.currentPage += 1;
    },
    clearData: (state, { payload }) => {
      state.cars.items = [];
      state.currentPage = 1;
      state.itemsOnPage = 8;
      state.totalPages = 1;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCarsThunkPerPage.fulfilled, (state, action) => {
        state.cars.items.push(...action.payload.items);
        state.currentPage = action.payload.currentPage;
        state.itemsOnPage += action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })
      .addMatcher(isAnyOf(getCarsThunkPerPage.fulfilled), (state, action) => {
        state.cars.isLoading = false;
      })
      .addMatcher(isAnyOf(getCarsThunkPerPage.pending), (state, action) => {
        state.cars.isLoading = true;
      });
  },
});

export const carReducer = carSlice.reducer;
export const {
  filterChanges,
  addToFavoriteList,
  removeFromFavoriteList,
  incrementPage,
  clearData,
} = carSlice.actions;
