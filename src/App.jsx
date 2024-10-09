//import { Counter } from "./components/Counter/Counter";
import { useDispatch } from "react-redux";
import { TodoList } from "./components/TodoList/TodoList";
import { useEffect } from "react";
import { fetchTodos } from "./redux/taskOps";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <TodoList />
    </>
  );
};

export default App;
