import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockTodo = {
  _id: '1',
  text: 'Test Todo',
  completed: false,
};

const mockToggleComplete = jest.fn();
const mockDeleteTodo = jest.fn();

describe('TodoItem Component', () => {
  it('renders todo text', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('calls toggleComplete when checkbox is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggleComplete).toHaveBeenCalledWith('1', false);
  });

  it('calls deleteTodo when delete button is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleComplete={mockToggleComplete}
        deleteTodo={mockDeleteTodo}
      />
    );
    const deleteBtn = screen.getByRole('button');
    fireEvent.click(deleteBtn);
    expect(mockDeleteTodo).toHaveBeenCalledWith('1');
  });
});
