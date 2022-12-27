import React from 'react'
import { ContactText } from '../../TextTranslations/Contact/ContactText';
import "./contact.css";

const Contact = (props) => {
    const contactText = ContactText[props.lang];
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">{contactText['title']}</h2>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">{contactText['socialMediaTitle']}</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="uil uil-github-alt contact__card-icon"></i>
                        <i className="uil uil-linkedin contact__card-icon"></i>
                        <h3 className="contact__card-title">{contactText['contactCardTitle']}</h3>
                        <span className="contact__card-data">{contactText['contactCardDesc']}</span>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">{contactText['emailTitle']}</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">{contactText['emailEmail']}</h3>
                        <span className="contact__card-data">{contactText['emailContact']}</span>

                        <a href="mailto:whalenlex@gmail.com" className="contact__button">{contactText['writeMe']} {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact