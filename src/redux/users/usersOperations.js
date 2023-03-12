import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://640dee531a18a5db83838fc0.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      console.log(data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
