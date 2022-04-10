import React from "react";
import { ITaskFormProps } from "../../interfaces/interfaces";
import {
  Backdrop,
  Content,
  Title,
  Label,
  Select,
  Input,
  TextArea,
} from "./TaskForm.styled";
import { Button } from "../TableButton/TableButton.styled";
import { CgCloseO } from "react-icons/cg";

const TaskForm: React.FC<ITaskFormProps> = ({
  toggleModal,
  title,
  submitHandler,
  inputHandler,
  category,
}) => {
  return (
    <Backdrop>
      <div>
        <form onSubmit={submitHandler}>
          <Content>
            <Button
              style={{ alignSelf: "flex-end", margin: "0" }}
              onClick={() => toggleModal()}
            >
              <CgCloseO size={20} />
            </Button>
            <Title>{title}</Title>
            <Select
              name="category"
              id="category"
              value={category}
              onChange={inputHandler}
            >
              <option value="Task">Task</option>
              <option value="Idea">Idea</option>
              <option value="Random Thought">Random Thought</option>
            </Select>
            <Label htmlFor="name">Todo Name</Label>
            <Input
              name="name"
              id="name"
              type="text"
              required
              onChange={inputHandler}
            />

            <Label htmlFor="content">Todo Content</Label>
            <TextArea
              name="content"
              id="content"
              cols={30}
              rows={10}
              required
              onChange={inputHandler}
            ></TextArea>
            {title === "Add Task" && <button type="submit">Add Task</button>}
            {title === "Edit Task" && <button type="submit">Edit Task</button>}
          </Content>
        </form>
      </div>
    </Backdrop>
  );
};

export default TaskForm;
