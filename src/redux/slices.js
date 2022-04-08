import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(10),
    name: "Shopping list",
    created: "20.01.2022",
    category: "Task",
    content: "Potatoes,Tomatoes",
    archived: false,
    active: true,
    dates: "",
  },
  {
    id: nanoid(10),
    name: "New Feature",
    created: "13.01.2022",
    category: "Idea",
    content: "Implement archiving notes feature",
    archived: false,
    active: true,
    dates: "",
  },
  {
    id: nanoid(10),
    name: "Travelling",
    created: "20.01.2022",
    category: "Random Thought",
    content: "Should do something cool during vacation",
    archived: false,
    active: true,
    dates: "",
  },
  {
    id: nanoid(10),
    name: "1st Hometask",
    created: "20.01.2022",
    category: "Task",
    content: "Finish all 3 hometasks",
    archived: false,
    active: true,
    dates: "",
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.push(payload); //slices uses Immer, so it's immutable
    },
    remove: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    toggleArchived: (state, { payload }) => {
      const task = state.find((item) => item.id === payload);
      task.archived = !task.archived;
      task.active = !task.active;
    },
  },
});

export const { add, remove, toggleArchived } = taskSlice.actions;
