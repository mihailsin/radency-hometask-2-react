import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./views/Tasks";
import ArchivedTasks from "./views/ArchivedTasks/ArchivedTasks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/archived-tasks" element={<ArchivedTasks />} />
      </Routes>
    </>
  );
}

export default App;
