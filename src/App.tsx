import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Tasks from "./views/Tasks/Tasks";
import ArchivedTasks from "./views/ArchivedTasks/ArchivedTasks";
import { Route, Routes, Navigate } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/archived-tasks" element={<ArchivedTasks />} />
        <Route path="*" element={<Navigate to="/tasks" />} />
      </Routes>
    </>
  );
};

export default App;
