import axios, { AxiosResponse, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { List, IList } from '../../types/types';
axios.defaults.baseURL = 'https://task-board-api-v7h2.onrender.com/api';

export const fetchLists = createAsyncThunk<
  List[],
  void,
  { rejectValue: string }
>('lists/fetchLists', async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<List[]> = await axios.get('/task_lists');
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

export const addList = createAsyncThunk<List, IList, { rejectValue: string }>(
  'lists/addList',
  async (IList, thunkAPI) => {
    try {
      const response: AxiosResponse<List> = await axios.post(
        '/task_lists',
        IList
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
  }
);

export const deleteList = createAsyncThunk<
  List,
  number,
  { rejectValue: string }
>('lists/deleteList', async (id, thunkAPI) => {
  try {
    const response: AxiosResponse<List> = await axios.delete(
      `/task_lists/${id}`
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

interface UpdateListArgs {
  id: number;
  data: Partial<List>;
}

export const updateList = createAsyncThunk<
  List,
  UpdateListArgs,
  { rejectValue: string }
>('lists/updateList', async ({ id, data }, thunkAPI) => {
  try {
    const response: AxiosResponse<List> = await axios.patch(
      `/task_lists/${id}`,
      data
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
