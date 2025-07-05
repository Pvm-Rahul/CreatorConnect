import React from 'react';
import jobs from '../data/jobs';

const EditorDashboard = () => {
  const editorJobs = jobs.filter((job) => job.roleNeeded === 'editor');

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Editor Dashboard</h1>
      <h2 className="text-xl font-semibold mb-4">Available Jobs for Video Editors</h2>

      {editorJobs.length === 0 ? (
        <p className="text-gray-500">No editor jobs available.</p>
      ) : (
        <ul className="space-y-4">
          {editorJobs.map((job) => (
            <li key={job.id} className="p-4 border bg-white rounded shadow">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-gray-700">{job.description}</p>
              {/* Future Apply Button */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EditorDashboard;
