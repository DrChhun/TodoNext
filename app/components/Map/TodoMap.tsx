import { TaskDetail } from "../Task/TaskDetail";
import { useSelector } from "react-redux";

export const TodoMap = () => {
  const todo = useSelector((state: any) => state.todos.value);
  const today = new Date();

  return (
    <div>
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
