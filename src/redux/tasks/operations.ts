import axios, { AxiosResponse, AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask, Task } from '../../types/types';

export const fetchTasks = createAsyncThunk<
  Task[],
  void,
  { rejectValue: string }
>('tasks/fetchTasks', async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<Task[]> = await axios.get('/tasks');
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

export const addTask = createAsyncThunk<Task, ITask, { rejectValue: string }>(
  'tasks/addTask',
  async (formData, thunkAPI) => {
    try {
      const response: AxiosResponse<Task> = await axios.post(
        '/tasks',
        formData
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

export const deleteTask = createAsyncThunk<
  Task,
  number,
  { rejectValue: string }
>('tasks/deleteTask', async (id, thunkAPI) => {
  try {
    const response: AxiosResponse<Task> = await axios.delete(`/tasks/${id}`);
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

interface UpdateTaskArgs {
  id: number;
  data: Partial<Task>;
}

export const updateTask = createAsyncThunk<
  Task,
  UpdateTaskArgs,
  { rejectValue: string }
>('tasks/updateTask', async ({ id, data }, thunkAPI) => {
  try {
    const response: AxiosResponse<Task> = await axios.patch(
      `/tasks/${id}`,
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
