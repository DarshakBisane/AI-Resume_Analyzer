import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../styles/hero.css";
import profile from "../../assets/CM25D004.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">
          ● AI-POWERED CAREER GROWTH
        </div>

        <h1 className="hero-title">
          Unlock Your <br />
          <span className="gradient-text">Dream Job</span> with <br />
          AI Analysis.
        </h1>

        <p className="hero-description">
          Upload your PDF. Get an instant score. Discover your strengths,
          fix your weaknesses, and land more interviews with our advanced AI algorithms.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Score My Resume Now →
          </button>

          <button className="secondary-btn">
           <span>▶</span> Watch Demo
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="resume-card">
          <div className="profile-row">
            <div className="avatar"><img src={profile} alt="Avtar"/></div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line short1"></div>
            </div>
            <div className="score">Score: 92/100</div>
          </div>

          <div className="resume-content">
            <div className="progress1"></div>
            <div className="line"></div>
            <div className="line short"></div>
          </div>
          <div className="resume-content">
            <div className="progress2"></div>
            <div className="line"></div>
            <div className="line short"></div>
          </div>
          <div className="resume-content3">
            <div className="line"></div>
          </div>
        </div>

        <div className="flyingdiv div1">
            <div className="flyicon ic1"><FontAwesomeIcon icon={faWandMagicSparkles} /></div>
            <div className="keys">
              <div className="title">AI Suggestion</div>
              <div className="description">Action Verbs</div>
            </div>
        </div>

        <div className="flyingdiv div2">
            <div className="flyicon ic2">< FontAwesomeIcon icon={faCheck} /></div>
            <div className="keys">
              <div className="title">Keywords</div>
              <div className="description">Optimized</div>
            </div>
        </div>
      </div>
    </section>
  )
}
