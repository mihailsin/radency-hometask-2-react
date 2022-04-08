import React from "react";
import { useState } from "react";
import { RelativeContainer } from "./components/RelativeContainer/RelativeContainer.Styled";
import Wrapper from "./components/Wrapper";
import TasksTable from "./components/TasksTable";
import CategoriesTable from "./components/CategoriesTable";
import ArchivedTable from "./components/ArchivedTable/ArchivedTable";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

function App() {
  const [addTaskFormIsVisible, setAddTaskFormIsVisible] = useState(false);
  const [archivedTableIsVisible, setArchivedTableIsVisible] = useState(false);
  const toggleAddTaskModal = (e) => {
    setAddTaskFormIsVisible(!addTaskFormIsVisible);
  };
  const toggleArchivedTable = (e) => {
    setArchivedTableIsVisible(!archivedTableIsVisible);
  };

  return (
    <RelativeContainer>
      <Wrapper>
        <TasksTable
          toggleModal={toggleAddTaskModal}
          toggleArchivedModal={toggleArchivedTable}
        />
        {addTaskFormIsVisible && (
          <AddTaskForm toggleModal={toggleAddTaskModal} />
        )}
        <CategoriesTable />
        {archivedTableIsVisible && (
          <ArchivedTable toggleArchivedModal={toggleArchivedTable} />
        )}
      </Wrapper>
    </RelativeContainer>
  );
}

export default App;
