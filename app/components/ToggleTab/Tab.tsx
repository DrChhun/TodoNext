import { ToggleProps } from "@/app/Type/Todo";

export const Tab: React.FC<ToggleProps> = ({
  title,
  notification,
  className,
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-sm md:text-base">{title}</h2>
      <div
        className={`bg-blue-500 ${
          notification == 0 && "hidden"
        } text-white w-fit px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-full`}
      >
        {notification}
      </div>
    </div>
  );
};
