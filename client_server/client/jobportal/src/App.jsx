import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div className="app">
      <h1>Job Openings</h1>

      <div className="job-container">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <img src={job.image} alt={job.title} />
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
