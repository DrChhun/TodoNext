"use client";

import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";
import { useSelector } from "react-redux";

const Page = () => {
  const todo = useSelector((state: any) => state.todos.value);
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
        <Tab className="py-8" title="All" notification={12} />
        <Tab className="py-8" title="Completed" notification={2} />
        <Tab className="py-8" title="Favorite" notification={9} />
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
                  year: "2-digit",
                  hour: "numeric",
                  hour12: true,
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
