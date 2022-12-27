import React from 'react'
import { FooterText } from '../../TextTranslations/Footer/FooterText';
import "./footer.css";

const Footer = (props) => {
    const footerText = FooterText[props.lang];
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">{footerText["name"]}</h1>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">{footerText['toTop']}</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">{footerText['about']}</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">{footerText['skills']}</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">{footerText['contact']}</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer