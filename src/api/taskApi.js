
import axiosInstance from './axiosInstance';

export const getTasks = async () => {
  const response = await axiosInstance.get('/tasks');
  return response.data;
};

export const getTask = async (id) => {
  const response = await axiosInstance.get(`/tasks/${id}`);
  return response.data;
};

export const createTaskFromAI = async (title) => {
  const response = await axiosInstance.post('/tasks/create_from_ai', { title });
  return response.data;
};

export const updateTask = async (id, updates) => {
  const response = await axiosInstance.patch(`/tasks/${id}`, { task: updates });
  return response.data;
};

export const deleteTask = async (id) => {
  await axiosInstance.delete(`/tasks/${id}`);
};

export const toggleSubtask = async (id) => {
  const response = await axiosInstance.patch(`/subtasks/${id}/toggle`);
  return response.data;
};