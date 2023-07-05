import { ToggleProps } from "@/app/Type/Todo";

export const Tab: React.FC<ToggleProps> = ({
  title,
  notification,
  className,
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2>{title}</h2>
      <div className="bg-blue-500 text-white w-fit px-4 py-2 rounded-full">
        {notification}
      </div>
    </div>
  );
};
