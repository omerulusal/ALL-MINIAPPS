import React, { useState } from "react";
import Todo from "./Todo";
import { useTodoLayerDeger } from "../context/TodoContext";

function TodoList({ todos }) {
  const [selectTodos, setSelectTodos] = useState([]);
  const [, dispatch] = useTodoLayerDeger();
  const handleSelectAll = (todos) => {
    if (selectTodos.length === todos.length) {
      setSelectTodos([]);
    } else {
      setSelectTodos(todos.map((todo) => todo.id));
    }
  };
  const handleSelectSingle = (todoId) => {
    if (selectTodos.includes(todoId)) {
      setSelectTodos(selectTodos.filter((id => id !== todos.id)));
    }
    else {
      setSelectTodos([...selectTodos, todoId])
    }
  };
  const handleBulkDelete = () => {
    if (selectTodos.length > 0) {
      // Reducer'a yeni bir action tipi ekleyerek toplu silme yapabiliriz.
      // Örneğin: dispatch({ type: "BULK_REMOVE_TODOS", payload: selectedTodos });
      // Veya mevcut REMOVE_TODO action'ını her bir seçili todo için çağırabiliriz:
      selectTodos.forEach(todoId => {
        dispatch({
          type: "REMOVE_TODO",
          payload: todoId,
        });
      });
      setSelectTodos([]); // Silme işleminden sonra seçimi sıfırla
    }
  };
  const handleBulkComplete = () => {
    if (selectTodos.length > 0) {
      selectTodos.forEach(todoId => {
        dispatch({
          type: "COMPLETE_TODO",
          payload: todoId,
        });
      });
      setSelectTodos([]);
    }
  };
  return (
    <div className="todoList">
      <div className="bulk-actions">
        <button onClick={() => handleSelectAll(todos)}>
          {selectTodos.length === todos.length ? 'Seçimi Kaldır' : 'Tümünü Seç'}
        </button>
        {selectTodos.length > 0 && (
          <>
            <button onClick={handleBulkComplete}>Tamamla</button>
            <button onClick={handleBulkDelete}>Sil</button>
          </>
        )}
      </div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            isSelected={selectTodos.includes(todo.id)}
            onSelect={() => handleSelectSingle(todo.id)}
          />
        ))}
    </div>
  );
}

export default TodoList;
