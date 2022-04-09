import React from "react";
import TasksTable from "../../components/TasksTable";
import { useSelector } from "react-redux";
import Wrapper from "../../components/Wrapper";
const ArchivedTasks = () => {
  const archivedTasks = useSelector((state) =>
    state.tasks.filter((task) => task.archived)
  );
  return (
    <Wrapper>
      <TasksTable tasks={archivedTasks} tableFor="archived" />
    </Wrapper>
  );
};
export default ArchivedTasks;
