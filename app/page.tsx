"use client";

import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";
import { useSelector } from "react-redux";

const Page = () => {
  const todo = useSelector((state: any) => state.todos.value);
  return (
    <div className="container">
      <div className="flex justify-between py-12">
        <DateDisplay date="Sun, 2 Jul" />
        <InputTask />
      </div>
      <Tab className="py-8" title="ALL" notification={12} />
      {todo.map((x: any, index: number) => (
        <>
          {x != "" && (
            <div key={index} className="py-4">
              <TaskDetail
                title={x}
                date={"23 may 2023"}
                category={"Basic Task"}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Page;
