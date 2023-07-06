"use client";

import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";
import { useSelector } from "react-redux";

const Page = () => {
  const todo = useSelector((state: any) => state.todos.value);
  const favorite = useSelector((state: any) => state.todos.important);
  const complete = useSelector((state: any) => state.todos.complete);
  const today = new Date();

  return (
    <div className="container">
      <div className="flex justify-between py-12">
        <DateDisplay
          date={today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "2-digit",
          })}
        />
        <InputTask />
      </div>
      <div className="flex gap-8">
        <Tab className="py-8" title="All" notification={todo.length} />
        <Tab
          className="py-8"
          title="Completed"
          notification={complete.length}
        />
        <Tab
          className="py-8"
          title="Important"
          notification={favorite.length}
        />
      </div>
      {todo.map((x: any, index: number) => (
        <>
          {x != "" && (
            <div key={index} className="py-4">
              <TaskDetail
                title={x}
                date={today.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                })}
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
