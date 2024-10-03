import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import './TaskBoard.css';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto', mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <IconButton onClick={addTask} color="primary">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box>
        {tasks.map((task, index) => (
          <Card key={index} variant="outlined" sx={{ mb: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>{task}</Typography>
              <IconButton onClick={() => deleteTask(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => setTasks([])}
        sx={{ mt: 2 }}
      >
        Clear All Tasks
      </Button>
    </Box>
  );
}

export default TaskBoard;

