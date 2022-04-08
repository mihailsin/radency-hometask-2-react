import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../../redux/slices";
import { nanoid } from "nanoid";
import { RelativeContainer } from "../../components/RelativeContainer/RelativeContainer.Styled";
import Wrapper from "../../components/Wrapper";
import TasksTable from "../../components/TasksTable";
import CategoriesTable from "../../components/CategoriesTable";
import TaskForm from "../../components/TaskForm/TaskForm";

const Tasks = () => {
  const [taskFormIsVisible, setTaskFormIsVisible] = useState(false);
  const [editTaskFormIsVisible, setEditTaskFormIsVisible] = useState(false);
  const [itemToEditId, setItemToEditId] = useState(null);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Task");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const activeTasks = useSelector((state) =>
    state.tasks.filter((task) => task.active)
  );

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
        break;

      default:
        return;
    }
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    const date =
      /(\d\d\.\d\d\.\d\d\d\d|\d\.\d\d\.\d\d\d\d|\d\d\/\d\d\/\d\d\d\d|\d\/\d\d\/\d\d\d\d)/g;
    const task = {
      id: nanoid(10),
      name,
      created: new Date().toLocaleString(),
      category,
      content,
      archived: false,
      active: true,
      dates: content.match(date)?.join(", ") || "",
    };
    dispatch(add(task));
  };

  const editContactHandler = (e) => {
    e.preventDefault();
    const date =
      /(\d\d\.\d\d\.\d\d\d\d|\d\.\d\d\.\d\d\d\d|\d\d\/\d\d\/\d\d\d\d|\d\/\d\d\/\d\d\d\d)/g;
    const task = {
      id: itemToEditId,
      name,
      category,
      content,
      archived: false,
      active: true,
      dates: content.match(date)?.join(", ") || "",
    };
    dispatch(edit(task));
  };

  const toggleTaskModal = () => {
    setTaskFormIsVisible(!taskFormIsVisible);
  };

  const toggleEditTaskModal = (id) => {
    setEditTaskFormIsVisible(!editTaskFormIsVisible);
    setItemToEditId(id);
    console.log(id);
  };
  return (
    <RelativeContainer>
      <Wrapper>
        <TasksTable
          toggleModal={toggleTaskModal}
          toggleEditModal={toggleEditTaskModal}
          tasks={activeTasks}
          tableFor="active"
        />
        {taskFormIsVisible && (
          <TaskForm
            inputHandler={inputHandler}
            submitHandler={addContactHandler}
            category={category}
            title={"Add Task"}
            toggleModal={toggleTaskModal}
          />
        )}
        {editTaskFormIsVisible && (
          <TaskForm
            inputHandler={inputHandler}
            submitHandler={editContactHandler}
            category={category}
            title={"Edit Task"}
            itemToEdit={itemToEditId}
            toggleModal={toggleEditTaskModal}
          />
        )}
        <CategoriesTable />
      </Wrapper>
    </RelativeContainer>
  );
};

export default Tasks;
