import React, { useState } from 'react';

const CreatorDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    roleNeeded: 'editor',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handlePostJob = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      ...jobData,
    };

    setJobs([newJob, ...jobs]);

    // Clear form
    setJobData({
      title: '',
      description: '',
      roleNeeded: 'editor',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Creator Dashboard</h1>

      {/* Job Posting Form */}
      <form
        onSubmit={handlePostJob}
        className="bg-white shadow-md rounded-xl p-6 mb-10 max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>

        <input
          name="title"
          type="text"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-2 mb-4 border rounded"
        />

        <select
          name="roleNeeded"
          value={jobData.roleNeeded}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="editor">Video Editor</option>
          <option value="writer">Content Writer</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>

      {/* Job List */}
      <div className="max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>
        {jobs.length === 0 ? (
          <p className="text-gray-500">No jobs posted yet.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="p-4 border bg-white rounded shadow">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <p className="text-gray-700">{job.description}</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                  Looking for: {job.roleNeeded === 'editor' ? 'Video Editor' : 'Content Writer'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreatorDashboard;
