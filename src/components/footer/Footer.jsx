import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Prasanth</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:prasanthmarco@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx  bx-envelope-alt"></i>
          </a>
          <a
            href="https://github.com/Prasanth-works"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/e-prasanth"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <span className="footer__copy">Prasanth Portfolio.</span>
      </div>
    </footer>
  );
};

export default Footer;
