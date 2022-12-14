import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, Setloading] = useState(false);
  const [jobs, Setjobs] = useState([]);
  const [index, Setindex] = useState(0);
  const [error, Seterror] = useState("");
  const fetchJobs = async () => {
    try {
      Setloading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (!data) {
        Seterror("Data not found");
      } else {
        Setjobs(data);
        Setloading(false);
      }
    } catch (error) {
      Seterror(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading ...</h2>
      </section>
    );
  }

  // const { company, dates, duties, title } = jobs[index];
  // console.log(company);
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs?.map((job, Index) => {
              return (
                <button
                  key={Index}
                  className={`job-btn ${Index === index && "active-btn"}`}
                  onClick={() => Setindex(Index)}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          {/* <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties?.map((duty, index) => {
              console.log(duty);
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article> */}
        </div>
      </div>
    </section>
  );
}

export default App;
