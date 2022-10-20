import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, Setjobs] = useState([]);
  const [index, Setindex] = useState(0);
 
  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    Setjobs(data);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">{jobs?.map((job,index)=>{
            return (
              <button key={index} className="job-btn" onClick={() => Setindex(index)}>
                {job.company}
              </button>
            );
          })}</div>
          <div className="job-info">{
            
          }</div>
        </div>
      </div>
    </section>
  );
}

export default App;
