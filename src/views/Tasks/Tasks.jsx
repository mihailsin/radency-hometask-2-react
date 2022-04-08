import React from "react";
import { useState } from "react";
import { RelativeContainer } from "../../components/RelativeContainer/RelativeContainer.Styled";
import Wrapper from "../../components/Wrapper";
import TasksTable from "../../components/TasksTable";
import CategoriesTable from "../../components/CategoriesTable";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";

const Tasks = () => {
  const [addTaskFormIsVisible, setAddTaskFormIsVisible] = useState(false);
  const toggleAddTaskModal = () => {
    setAddTaskFormIsVisible(!addTaskFormIsVisible);
  };
  return (
    <RelativeContainer>
      <Wrapper>
        <TasksTable toggleModal={toggleAddTaskModal} />
        {addTaskFormIsVisible && (
          <AddTaskForm toggleModal={toggleAddTaskModal} />
        )}
        <CategoriesTable />
      </Wrapper>
    </RelativeContainer>
  );
};

export default Tasks;
