import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ITask } from "../../interfaces/interfaces";
import { add, edit } from "../../redux/slices";
import { nanoid } from "nanoid";
import { RelativeContainer } from "../../components/RelativeContainer/RelativeContainer.Styled";
import Wrapper from "../../components/Wrapper";
import TasksTable from "../../components/TasksTable";
import CategoriesTable from "../../components/CategoriesTable";
import TaskForm from "../../components/TaskForm/TaskForm";

const Tasks: React.FC = () => {
  const [taskFormIsVisible, setTaskFormIsVisible] = useState<boolean>(false);
  const [editTaskFormIsVisible, setEditTaskFormIsVisible] =
    useState<boolean>(false);
  const [itemToEditId, setItemToEditId] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("Task");
  const [content, setContent] = useState<string>("");
  const dispatch = useAppDispatch();
  const activeTasks = useAppSelector((state) =>
    state.tasks.filter((task) => task.active)
  );

  const inputHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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

  const addContactHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const date =
      /(\d\d\.\d\d\.\d\d\d\d|\d\.\d\d\.\d\d\d\d|\d\d\/\d\d\/\d\d\d\d|\d\/\d\d\/\d\d\d\d)/g;
    const task: ITask = {
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

  const editContactHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const date =
      /(\d\d\.\d\d\.\d\d\d\d|\d\.\d\d\.\d\d\d\d|\d\d\/\d\d\/\d\d\d\d|\d\/\d\d\/\d\d\d\d)/g;
    const task: ITask = {
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

  const toggleEditTaskModal = (id: string) => {
    setEditTaskFormIsVisible(!editTaskFormIsVisible);
    setItemToEditId(id);
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
            toggleModal={toggleEditTaskModal}
          />
        )}
        <CategoriesTable />
      </Wrapper>
    </RelativeContainer>
  );
};

export default Tasks;
