import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import type { RootState } from "./store";
import { ITask } from "../interfaces/interfaces";

// interface taskState = {
//   id: object,
//     name: string,
//     created: string,
//     category: string,
//     content: string,
//     archived: boolean,
//     active: boolean,
//     dates: string,
// }

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
] as ITask[];

// To make things easier, createReducer uses immer to let you write
// reducers as if they were mutating the state directly. In reality,
// the reducer receives a proxy state that translates all mutations
// into equivalent copy operations.

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add: (state: any[], action: PayloadAction<object>) => {
      state.push(action.payload); //slices uses Immer, so it's immutable
    },
    remove: (state: any[], action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleArchived: (state: any[], action: PayloadAction<string>) => {
      const task = state.find((item) => item.id === action.payload);
      task.archived = !task.archived;
      task.active = !task.active;
    },
    edit: (state: any[], { payload }) => {
      const task = state.find((item) => item.id === payload.id);

      task.name = payload.name;
      task.category = payload.category;
      task.content = payload.content;
      task.dates = payload.dates ? payload.dates : "";
    },
  },
});

export const { add, remove, toggleArchived, edit } = taskSlice.actions;