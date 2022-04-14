import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './TodoList'

const root = document.getElementById('root')
createRoot(root).render(<TodoList />)