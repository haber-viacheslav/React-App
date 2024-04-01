import axios, { AxiosResponse, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IHistory } from '../../types/types';
axios.defaults.baseURL = 'https://task-board-api-v7h2.onrender.com/api';
export const fetchHistory = createAsyncThunk<
  IHistory[],
  void,
  { rejectValue: string }
>('task-history/fetchTasks', async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<IHistory[]> = await axios.get(
      '/task-history'
    );
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.message);
    } else {
      return thunkAPI.rejectWithValue('An error occurred');
    }
  }
});
