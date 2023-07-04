import { DateDisplayProps } from "@/app/Type/Todo";

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => (
  <h2 className="text-3xl font-bold">{date}</h2>
);
