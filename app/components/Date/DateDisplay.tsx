import { DateDisplayProps } from "@/app/Type/Todo";

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => (
  <h2 className="text-xl mb-4 md:mb-0 md:text-3xl font-bold">{date}</h2>
);
