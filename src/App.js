import React from "react";
import { useState } from "react";
import { RelativeContainer } from "./components/RelativeContainer/RelativeContainer.Styled";
import Wrapper from "./components/Wrapper";
import TasksTable from "./components/TasksTable";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

function App() {
  const [addTaskFormIsVisible, setAddTaskFormIsVisible] = useState(false);

  const toggleAddTaskModal = (e) => {
    setAddTaskFormIsVisible(!addTaskFormIsVisible);
  };

  return (
    <RelativeContainer>
      <Wrapper>
        <TasksTable toggleModal={toggleAddTaskModal} />
        {addTaskFormIsVisible && (
          <AddTaskForm toggleModal={toggleAddTaskModal} />
        )}
      </Wrapper>
    </RelativeContainer>
  );
}

export default App;
