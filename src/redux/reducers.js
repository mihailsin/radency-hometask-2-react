import { combineReducers } from "redux";
import { taskSlice } from "./slices";

export const rootReducer = combineReducers({
  tasks: taskSlice.reducer,
});
