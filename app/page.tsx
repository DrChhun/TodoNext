"use client";

import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";
import { decrement, increment } from "./redux/features/todoRedux";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const todo = useSelector((state: any) => state.todos.value);
  const dispath = useDispatch();
  return (
    <div className="container">
      <div className="flex justify-between py-12">
        <DateDisplay date="Sun, 2 Jul" />
        <InputTask />
      </div>
      <Tab className="py-8" title="ALL" notification={12} />
      <TaskDetail
        title={"Complete exercise on page 32"}
        date={"23 may 2023"}
        category={"Basic Task"}
      />

      <h1>Here is redux {todo}</h1>
      <button onClick={() => dispath(decrement())}>minus</button>
      <button onClick={() => dispath(increment())}>Add more</button>
    </div>
  );
};

export default Page;
