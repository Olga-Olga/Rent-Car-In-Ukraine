import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Loading } from 'notiflix';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://64f6341b2b07270f705e48eb.mockapi.io';

// export const getCarsThunk = createAsyncThunk(
//   'getCarsThunk',
//   async (_, { rejectWithValue }) => {
//     Loading.standard();
//     try {
//       const { data } = await axios.get(`/advert`);
//       Loading.remove();
//       return data;
//     } catch (err) {
//       Loading.remove();
//       toast.error(
//         `Sorry, there is an error: ${err.message}. Try to come later. If you see car, they could ba saved from you last visited our platform.`,
//         {
//           position: toast.POSITION.TOP_CENTER,
//         }
//       );
//       return rejectWithValue(err.message);
//     }
//   }
// );

export const getCarsThunkPerPage = createAsyncThunk(
  'getCarsThunkPerPage',
  async (page, { rejectWithValue }) => {
    Loading.standard();
    try {
      const { data } = await axios.get(`/advpage?currentPage=${page}`);
      console.log(data);
      Loading.remove();
      return data[0];
    } catch (err) {
      Loading.remove();
      toast.error(
        `Sorry, there is an error: ${err.message}. Try to come later. If you see car, they could ba saved from you last visited our platform.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return rejectWithValue(err.message);
    }
  }
);
