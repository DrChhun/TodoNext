import { useDispatch } from "react-redux";
import { incrementByAmount } from "@/app/redux/features/todoRedux";
import { useState } from "react";

export const InputTask = () => {
  const dispath = useDispatch();
  const [handleInput, setInput] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispath(incrementByAmount(handleInput));
  };
  return (
    <div className="space-x-8">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 outline-none border-b-2 border-blue-500"
          type="text"
          placeholder="to do something..."
        />
        <button className="bg-blue-200 text-blue-500 px-4 py-2 rounded-md">
          Add Task
        </button>
      </form>
    </div>
  );
};
