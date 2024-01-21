import { useEffect, useState } from "react";
import jobsData from "../utils/CurrentVacancies.json";
import { element } from "prop-types";

export const CurrentVacancies = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const { departments, jobs } = jobsData;

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department === "All Departments" ? null : department);
  };

  const filteredJobs = jobs.filter((job) => {
    return !selectedDepartment || job.department === selectedDepartment;
  });

  return (
    <section className="jobs-section">
      <div className="container">
        <div className="departments">
          <h2>Departments:</h2>
          <ul>
            {departments.map((department, index) => (
              <li
                key={index}
                onClick={() => handleDepartmentClick(department)}
                className={selectedDepartment === department ? "active" : ""}
              >
                {department}
              </li>
            ))}
          </ul>
        </div>

        <div className="vacanacies">
          <h2>Jobs in {selectedDepartment}:</h2>
          <ul>
            {filteredJobs.map((job, index) => (
              <li key={index}>
                <div className="text-container">
                  <h1>{job.title}</h1>
                  <br />
                  <p>{job.description}</p>
                  <br />
                  <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                    {job.location}
                  </p>
                </div>

                <button className="action-button">Apply Now</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
