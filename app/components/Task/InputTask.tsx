export const InputTask = () => {
  return (
    <div className="space-x-8">
      <input
        className="px-4 py-2 outline-none border-b-2 border-blue-500"
        type="text"
        placeholder="to do something..."
      />
      <button className="bg-blue-200 text-blue-500 px-4 py-2 rounded-md">
        Add Task
      </button>
    </div>
  );
};
