import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f6341b2b07270f705e48eb.mockapi.io';

export const getCarsThunk = createAsyncThunk(
  'getCarsThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message); //try tostify
    }
  }
  // { ??
  //   condition: (_, { getState }) => {
  //     const isLoading = getState().loading;
  //     if (isLoading) {
  //       return false;
  //     }
  //   },
  // }
);

// export const getOneCarThunk = createAsyncThunk(
//   'getOneCarThunk',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/advert/${id}`);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const isLoading = getState().loading;
//       if (isLoading) {
//         return false;
//       }
//     },
//   }
// );
