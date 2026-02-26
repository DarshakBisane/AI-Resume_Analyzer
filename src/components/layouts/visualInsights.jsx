import React from "react";
import "../../styles/visualInsights.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const VisualInsights = () => {
  return (
    <section className="insight-section">
      <div className="insight-container">

        {/* LEFT SIDE */}
        <div className="insight-left">
          <h2><span>Visual Insights</span> for your Career</h2>

          <p className="insight-sub">
            Track your application success rate, interview callbacks, and skill
            gaps over time with our analytics dashboard.
          </p>

          <ul className="insight-list">
            <li>
              <span className="check-icon">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Real-time application tracking
            </li>
            <li>
              <span className="check-icon">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Skill gap analysis visualization
            </li>
            <li>
              <span className="check-icon">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Market salary comparison charts
            </li>
          </ul>

          <button className="demo-btn">View Dashboard Demo</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="insight-right">
          <div className="analytics-card">

            <div className="analytics-header">
              <h4>Application Analytics</h4>
              <select>
                <option>Last 30 Days</option>
                <option>Last 60 Days</option>
              </select>
            </div>

            <div className="analytics-chart">
                <div className="bar bar-1">
                    <div className="line"></div>
                    <div className="line small"></div>
                    
                </div>
                
                <div className="others">
                    <div className="bar bar-2">
                        <div className="line"></div>
                        <div className="line small"></div>
                    </div>
                    <div className="bar bar-2">
                        <div className="line"></div>
                        <div className="line small"></div>
                    </div>
                    <div className="bar bar-2">
                        <div className="line"></div>
                        <div className="line small"></div>
                    </div>
                    
                </div>
                
            </div>
              
          </div>
        </div>
                 
      </div>

    </section>
  );
};

export default VisualInsights;