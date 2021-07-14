import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

const todos = [
  {
    id: 1,
    name: "Sample task"
  }
]

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter(todo => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...state];
      let index = newTodos.findIndex(todo=>todo.id===action.payload.id)
      if (index !== -1) {
        newTodos[index]= action.payload;
        return newTodos;
      }
      // return newTodos;
    default:
      return state;
  }
}