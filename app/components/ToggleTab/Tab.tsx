interface Props {
  title: string;
  notification: number;
}

export const Tab: React.FC<Props> = ({ title, notification }) => {
  return (
    <div className="flex items-center gap-4">
      <h2>{title}</h2>
      <div className="bg-blue-500 text-white w-fit px-4 py-2 rounded-full">
        {notification}
      </div>
    </div>
  );
};
