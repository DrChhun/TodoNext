interface Props {
  title: string;
  date: string;
  category: string;
}

export const TaskDetail: React.FC<Props> = ({ title, date, category }) => {
  return (
    <div className="bg-white py-8 px-16 rounded-md max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-black text-2xl">{title}</h2>
        <div className="bg-green-300 py-2 px-4 text-green-600 text-xl rounded-full">
          +
        </div>
      </div>
      <div className="flex text-slate-400 gap-4">
        <h2>{date}</h2>
        <h2>{category}</h2>
      </div>
    </div>
  );
};
