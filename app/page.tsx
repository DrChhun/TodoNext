import { DateDisplay } from "./components/Date/DateDisplay";
import { InputTask } from "./components/Task/InputTask";
import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";

const Page = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-12">
        <DateDisplay date="Sun, 2 Jul" />
        <InputTask />
      </div>
      <Tab className="py-8" title="ALL" notification={12} />
      <TaskDetail
        title={"Complete exercise on page 32"}
        date={"23 may 2023"}
        category={"Basic Task"}
      />
    </div>
  );
};

export default Page;
