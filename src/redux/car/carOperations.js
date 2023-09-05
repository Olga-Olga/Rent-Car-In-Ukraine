import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f6341b2b07270f705e48eb.mockapi.io';

export const getCarThunk = createAsyncThunk(
  'getCarThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().loading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const getOneCarThunk = createAsyncThunk(
  'getCarThunk',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().loading;
      if (isLoading) {
        return false;
      }
    },
  }
);
