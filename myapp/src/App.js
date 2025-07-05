import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreatorDashboard from './dashboards/CreatorDashboard';
import EditorDashboard from './dashboards/EditorDashboard';
import WriterDashboard from './dashboards/WriterDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard/creator" element={<CreatorDashboard />} />
        <Route path="/dashboard/editor" element={<EditorDashboard />} />
        <Route path="/dashboard/writer" element={<WriterDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
