
import { useState, useEffect, useCallback } from 'react';
import { getTasks, createTaskFromAI, deleteTask, toggleSubtask } from '../api/taskApi';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTaskFromAI = async (title) => {
    setCreating(true);
    setError('');
    try {
      const newTask = await createTaskFromAI(title);
      setTasks((prev) => [newTask, ...prev]);
      return newTask;
    } catch (err) {
      const message = err.response?.data?.details || err.response?.data?.error || 'Failed to create task';
      setError(message);
      throw err;
    } finally {
      setCreating(false);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const toggleTaskSubtask = async (taskId, subtaskId) => {
    try {
      const updatedSubtask = await toggleSubtask(subtaskId);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? {
                ...task,
                subtasks: task.subtasks.map((st) =>
                  st.id === subtaskId ? updatedSubtask : st
                ),
              }
            : task
        )
      );
    } catch (err) {
      setError('Failed to update subtask');
    }
  };

  return { tasks, loading, creating, error, addTaskFromAI, removeTask, toggleTaskSubtask };
}