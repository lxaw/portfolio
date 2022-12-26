import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Lex Whalen</h1>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Back to Top</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer