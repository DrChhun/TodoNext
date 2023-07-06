"use client";

import { useState } from "react";
import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";
import { useSelector } from "react-redux";
import { TodoMap } from "./components/Map/TodoMap";
import { CompleteMap } from "./components/Map/CompleteMap";
import { FavoriteMap } from "./components/Map/FavoriteMap";

const Page = () => {
  const todo = useSelector((state: any) => state.todos.value);
  const favorite = useSelector((state: any) => state.todos.important);
  const complete = useSelector((state: any) => state.todos.complete);
  const today = new Date();
  const [handleTab, setHandleTab] = useState<string>("all");

  return (
    <div className="container">
      <div className="flex justify-between py-6 md:py-12 flex-col md:flex-row">
        <DateDisplay
          date={today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "2-digit",
          })}
        />
        <InputTask />
      </div>
      <div className="flex gap-8 cursor-pointer items-center">
        <div onClick={() => setHandleTab("all")}>
          <Tab className="py-8" title="All" notification={todo.length} />
        </div>
        <div onClick={() => setHandleTab("completed")}>
          <Tab
            className="py-8"
            title="Completed"
            notification={complete.length}
          />
        </div>
        <div onClick={() => setHandleTab("important")}>
          <Tab
            className="py-8"
            title="Important"
            notification={favorite.length}
          />
        </div>
      </div>
      {handleTab == "all" ? (
        <TodoMap />
      ) : handleTab == "completed" ? (
        <CompleteMap />
      ) : (
        handleTab == "important" && <FavoriteMap />
      )}
    </div>
  );
};

export default Page;
