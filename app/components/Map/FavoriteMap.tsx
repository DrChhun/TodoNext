import { TaskDetail } from "../Task/TaskDetail";
import { useSelector } from "react-redux";

export const FavoriteMap = () => {
  const important = useSelector((state: any) => state.todos.important);
  const today = new Date();

  return (
    <div>
      {important.length == 0 && (
        <h2 className="text-center">No Important task</h2>
      )}
      {important.map((x: any, index: number) => (
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
