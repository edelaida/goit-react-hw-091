import { Field, Form, Formik } from "formik";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { addTodoThunks } from "../../redux/taskOps";

export const AddForm = () => {
  const initialValues = { todo: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    dispatch(addTodoThunks(values));
    options.resetForm();
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="todo" placeholder="Enter new todo" />
          <button type="submit">Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
