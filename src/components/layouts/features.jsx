import React from "react";
import "../../styles/features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faMagnifyingGlass, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const CoreFeatures = () => {
  return (
    <section className="core-section">
      <div className="core-container">
        
        {/* Header */}
        <div className="core-header">
          <div>
            <h2>
              Core <span>Features</span>
            </h2>
            <p>
              Everything you need to beat the ATS and impress hiring managers.
            </p>
          </div>

          <button className="view-btn">
            <span>View all features →</span>
          </button>
        </div>

        {/* Cards */}
        <div className="core-cards">

          {/* Card 1 */}
          <div className="core-card card-1">
            <div className="icon-box purple">
              <FontAwesomeIcon icon={faChartSimple} />
            </div>

            <h3>Smart Scoring</h3>
            <p>
              Get a score out of 100 based on industry standards. Understand
              exactly where you stand before you apply.
            </p>

            <div className="chart-mock">
                <div className="mock1"></div>
                <div className="mock2"></div>
                <div className="mock3"></div>
                <div className="mock4"></div>
                <div className="mock5"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="core-card card-2">
            <div className="icon-box violet">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <h3>Strengths & Weaknesses</h3>
            <p>
              Detailed breakdown of what works and what doesn't. We highlight
              vague wording, clichés, and missing sections.
            </p>

            <ul className="feature-list">
              <li className="green">✔ Strong leadership examples</li>
              <li className="red">✖ Missing measurable results</li>
              <li className="green">✔ Clear contact info</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="core-card card-3">
            <div className="icon-box cyan">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>

            <h3>Smart Suggestions</h3>
            <p>
              AI-driven text improvements and keyword optimization. Rewrite
              bullet points with a single click.
            </p>

            <div className="suggestion-box">
              <span className="old-text">
                Managed a team of sales people.
              </span>
              <span className="new-text">
                <FontAwesomeIcon icon={faWandMagicSparkles} /> Spearheaded a sales team of 15...
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;