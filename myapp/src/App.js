import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CreatorDashboard from './dashboards/CreatorDashboard';
import EditorDashboard from './dashboards/EditorDashboard';
import WriterDashboard from './dashboards/WriterDashboard';
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Routes*/ }
        <Route 
           path="/dashboard/creator" 
           element={
            <ProtectedRoute requiredRole="creator">
               <CreatorDashboard />
            </ProtectedRoute>   
            }
        />
        <Route 
           path="/dashboard/editor" 
           element={
            <ProtectedRoute requiredRole="editor">
              <EditorDashboard />
            </ProtectedRoute> 
          } 
        />
        <Route 
           path="/dashboard/writer" 
           element={
            <ProtectedRoute requiredRole="writer">
              <WriterDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
