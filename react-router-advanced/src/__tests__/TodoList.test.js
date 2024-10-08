// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  fireEvent.click(screen.getByText('Learn React'));
  expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText('Delete')[0]);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
