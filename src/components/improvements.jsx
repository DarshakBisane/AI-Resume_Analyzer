import "../styles/improvements.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faFilePen, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const Improvements = () => {
  return (
    <section className="suite-section">
      <div className="suite-container">

        <p className="suite-tag">COMPREHENSIVE SUITE</p>

        <h2 className="suite-title">
          More Than Just <span>Resumes</span>
        </h2>

        <p className="suite-subtitle">
          A complete toolkit to accelerate your career journey from application to interview.
        </p>

        <div className="suite-cards">

          {/* Card 1 */}
          <div className="suite-card">
            <div className="card-top">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="card-content">
              <h3>Interview Preparation Bot</h3>
              <p>
                Practice with AI that simulates real interview scenarios tailored to your target job role.
              </p>
              <a href="/simulator" className="blue-link">Try Simulator →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="suite-card">
            <div className="card-top purple">
              <FontAwesomeIcon icon={faFilePen} />
            </div>
            <div className="card-content">
              <h3>AI Cover Letter Generator</h3>
              <p>
                Instantly generate personalized cover letters that match your resume style and the job description.
              </p>
              <a href="/purple-link" className="purple-link">Generate Now →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="suite-card">
            <div className="card-top cyan">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <div className="card-content">
              <h3>Career Roadmap Planner</h3>
              <p>
                Visualize your career path and identify the skills you need to reach your ultimate professional goals.
              </p>
              <a href="/cyan-link" className="cyan-link">Plan Career →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Improvements;

