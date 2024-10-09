import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchStr,
  selectTasks,
  toggleTask,
} from "../../redux/taskSlice";
import s from "./TodoList.module.css";
import { dleteTodoThunk } from "../../redux/taskOps";

export const List = () => {
  const tasks = useSelector(selectTasks);
  const searchStr = useSelector(selectSearchStr);
  const filteredData = tasks.filter((task) =>
    task.todo.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
  );
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {filteredData.map((item) => (
        <li className={s.item} key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => dispatch(toggleTask(item.id))}
          />
          <p>{item.todo}</p>
          <button onClick={() => dispatch(dleteTodoThunk(item.id))}>
            {" "}
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
