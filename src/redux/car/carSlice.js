import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchCars,
  fetchOneCar,
  getCarThunk,
  getOneCarThunk,
} from './carOperations';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    cars: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterChanges: (state, { payload }) => {
      state.filter = payload;
      console.log(state.filter);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarThunk.fulfilled, (state, action) => {
        // state.contacts.items = action.payload;
        // state.contacts.isLoading = false;
      })
      // .addCase(getOneCarThunk.fulfilled, (state, { payload }) => {
      //   // state.contacts.items = state.contacts.items.filter(
      //   //   contact => contact.id !== payload
      //   // );
      // })
      //   .addCase(addContacts.fulfilled, (state, { payload }) => {
      //     state.contacts.items.push(payload);
      //   })
      //   .addCase(fetchContacts.rejected, (state, action) => {
      //     state.contacts.isLoading = false;
      //     state.error = action.payload;
      //   })
      .addMatcher(
        isAnyOf(),
        //   fetchContacts.fulfilled,
        //   removeContacts.fulfilled,
        //   addContacts.fulfilled
        (state, action) => {
          //   state.contacts.isLoading = false;
        }
      );
    //   .addMatcher(
    //     isAnyOf(
    //       fetchContacts.pending,
    //       removeContacts.pending,
    //       addContacts.pending
    //     ),
    //     (state, action) => {
    //       state.contacts.isLoading = true;
    //     }
    //   );
  },
});

export const carReducer = carSlice.reducer;
export const { filterChanges } = carSlice.actions;
