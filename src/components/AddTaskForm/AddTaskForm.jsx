import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices";
import { nanoid } from "nanoid";
import {
  Backdrop,
  Content,
  Title,
  Label,
  Select,
  Input,
  TextArea,
} from "./AddTaskForm.styled";
import { Button } from "../TableButton/TableButton.styled";
import { CgCloseO } from "react-icons/cg";
const AddTaskForm = ({ toggleModal }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Task");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

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

  const submitHandler = (e) => {
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
            <Title>Add task</Title>
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

            <Label name="date" htmlFor="content">
              Todo Content
            </Label>
            <TextArea
              name="content"
              id="content"
              cols="30"
              rows="10"
              required
              onChange={inputHandler}
            ></TextArea>
            <button type="submit">Add ToDo</button>
          </Content>
        </form>
      </div>
    </Backdrop>
  );
};

export default AddTaskForm;
