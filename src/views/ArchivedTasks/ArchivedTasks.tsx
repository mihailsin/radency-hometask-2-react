import React from "react";
import TasksTable from "../../components/TasksTable";
import { useAppSelector } from "../../redux/hooks";
import Wrapper from "../../components/Wrapper";
const ArchivedTasks: React.FC = () => {
  const archivedTasks = useAppSelector<any[]>((state) =>
    state.tasks.filter((task) => task.archived)
  );
  return (
    <Wrapper>
      <TasksTable tasks={archivedTasks} tableFor="archived" />
    </Wrapper>
  );
};
export default ArchivedTasks;
