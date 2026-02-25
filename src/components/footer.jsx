import React from "react";
import "../styles/footer.css";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-column">
          <h2 className="logo">AI RESUME</h2>
          <p className="footer-text">
            Our mission is to democratize career success by providing top-tier
            AI tools to job seekers worldwide. We believe everyone deserves a
            resume that truly represents their potential.
          </p>

          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Resume Scorer</a></li>
            <li><a href="#">Cover Letter Generator</a></li>
            <li><a href="#">Interview Prep</a></li>
            <li><a href="#">Career Roadmap</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Resume Templates</a></li>
            <li><a href="#">Career Advice</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Contact</h3>

          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <span>support@airesume.com</span>
          </div>

          <div className="contact-item">
            <MdPhone className="contact-icon" />
            <span>+1 (555) 123-4567</span>
          </div>

          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <span>
              123 Innovation Dr,<br />
              San Francisco, CA 94103
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 AI Resume Analyser. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;