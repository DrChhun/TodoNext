import { TaskProps } from "@/app/Type/Todo";
import { useDispatch } from "react-redux";
import { addToFavorite, addToComplete } from "@/app/redux/features/todoRedux";

export const TaskDetail: React.FC<TaskProps> = ({
  title,
  date,
  category,
  className,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-white shadow-md py-8 px-16 rounded-md max-w-3xl mx-auto ${className}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-black text-2xl">{title}</h2>
        <div className="flex gap-4">
          <div
            onClick={() => dispatch(addToFavorite(title))}
            className="hover:bg-red-400 duration-300 bg-red-300 h-8 py-2 px-4 text-green-600 text-xl rounded-full"
          ></div>
          <div
            onClick={() => dispatch(addToComplete(title))}
            className="hover:bg-green-400 duration-300 bg-green-300 py-2 px-4 text-green-600 text-xl rounded-full"
          ></div>
        </div>
      </div>
      <div className="flex text-slate-400 gap-8">
        <h2>{date}</h2>
        <h2>{category}</h2>
      </div>
    </div>
  );
};
