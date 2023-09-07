import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCarsThunk } from './carOperations';

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
  },
  reducers: {
    filterChanges: (state, { payload }) => {
      state.filter = payload;
      console.log(state.filter);
    },
    filteredCar: (state, { payload }) => {
      state.cars.items = state.cars.items.filter(car => car.id !== payload);
    },
    changeModalWindow: (state, { payload }) => {
      state.isOpenModal = !state.isOpenModal;
    },
    addToFavoriteList: (state, { payload }) => {
      state.cars.favoriteList.push(payload);
    },
    removeFromFavoriteList: (state, { payload }) => {
      state.cars.favoriteList = state.cars.favoriteList.filter(
        item => item.id !== payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.cars.items = action.payload;
        state.cars.isLoading = false;
      })
      .addMatcher(isAnyOf(getCarsThunk.fulfilled), (state, action) => {
        state.cars.isLoading = false;
      })
      .addMatcher(isAnyOf(getCarsThunk.pending), (state, action) => {
        state.cars.isLoading = true;
      });
  },
});

export const carReducer = carSlice.reducer;
export const { filterChanges, addToFavoriteList, removeFromFavoriteList } =
  carSlice.actions;
