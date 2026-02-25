import React from "react";
import "../styles/joinnow.css";

const JoinNow = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <h2>Ready to land your <span className="span">dream job?</span></h2>

        <p>
          Join thousands of professionals who have optimized their career
          path with AI.
        </p>

        <div className="cta-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Started</button>
        </div>

        <span className="cta-note">
          No credit card required. 14-day free trial.
        </span>

      </div>
    </section>
  );
};

export default JoinNow;