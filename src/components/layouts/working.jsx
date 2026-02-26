import React from 'react'
import '../../styles/howItWorks.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faMicrochip, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function howitworks() {
  return (
     <section className="how-section">
      <div className="how-container">
        <h2 className="how-title">How It Works</h2>
        <p className="how-subtitle">
          Three simple steps to transform your resume into a job-landing machine.
        </p>

        <div className="how-steps">
          <div className="how-line"></div> 
          <div className="how-card">
            <div className="how-icon upload upicon">
              <FontAwesomeIcon icon={faCloudArrowUp} />
            </div>
              <span className="step-badge upload">STEP 1</span>
              <h3>Upload PDF</h3>
              <p>
                Drag and drop your existing resume. We support PDF and DOCX formats securely.
              </p>
          </div>

          <div className="how-card">
            <div className="how-icon ai aiicon"> <FontAwesomeIcon icon={faMicrochip} /></div>
            <span className="step-badge ai">STEP 2</span>
            <h3>AI Analysis</h3>
            <p>
              Our advanced AI scans your resume against thousands of job descriptions
              and industry standards.
            </p>
          </div>

          <div className="how-card">
            <div className="how-icon feedback fbicon">  <FontAwesomeIcon icon={faBullseye} /></div>
            <span className="step-badge feedback">STEP 3</span>
            <h3>Get Actionable Feedback</h3>
            <p>
              Receive a detailed score and step-by-step instructions to improve
              your resume instantly.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
