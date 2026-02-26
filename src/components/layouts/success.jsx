import React from "react";
import "../../styles/success.css";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <section className="success-section">
      <h2 className="success-title">Success Stories</h2>

      <div className="success-container">

        {/* Card 1 */}
        <div className="success-card">
          <FaQuoteLeft className="quote purple" />

          <p>
            "I applied to 50 jobs with no response. After using the AI Resume
            Analyser, I got 3 interviews in one week. The keyword optimization
            is a game changer."
          </p>

          <div className="profile">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <div>
              <h4>Sarah Jenkins</h4>
              <span className="purple-text">Landed job at TechCorp</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="success-card">
          <FaQuoteLeft className="quote violet" />

          <p>
            "The interview preparation bot helped me prepare for tough
            technical questions. I felt so much more confident walking into
            the interview."
          </p>

          <div className="profile">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <div>
              <h4>Michael Chen</h4>
              <span className="violet-text">Hired as Senior Dev</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="success-card">
          <FaQuoteLeft className="quote cyan" />

          <p>
            "Simple, fast, and effective. The score gave me a reality check,
            and the suggestions were easy to implement. Highly recommended."
          </p>

          <div className="profile">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
            <div>
              <h4>Emily Rodriguez</h4>
              <span className="cyan-text">Marketing Manager</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;