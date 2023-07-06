import { TaskDetail } from "../Task/TaskDetail";
import { useSelector } from "react-redux";

export const CompleteMap = () => {
  const complete = useSelector((state: any) => state.todos.complete);
  const today = new Date();

  return (
    <div>
      {complete.length == 0 && (
        <h2 className="text-center">No Completed task</h2>
      )}
      {complete.map((x: any, index: number) => (
        <>
          {x != "" && (
            <div key={index} className="py-4">
              {" "}
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
