import { TaskDetail } from "./components/Task/TaskDetail";
import { Tab } from "./components/ToggleTab/Tab";

const Page = () => {
  return (
    <>
      <h1>This HomePage</h1>
      <Tab title="ALL" notification={12} />
      <TaskDetail
        title={"Complete exercise on page 32"}
        date={"23 may 2023"}
        category={"Basic Task"}
      />
    </>
  );
};

export default Page;
