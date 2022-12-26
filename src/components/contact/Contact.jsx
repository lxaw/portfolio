import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Let's Get In Touch</h2>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Social Media</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="uil uil-github-alt contact__card-icon"></i>
                        <i className="uil uil-linkedin contact__card-icon"></i>
                        <h3 className="contact__card-title">Feel free to reach out.</h3>
                        <span className="contact__card-data">I typically respond within 3 business days.</span>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Email about a Project</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">whalenlex@gmail.com</span>

                        <a href="mailto:whalenlex@gmail.com" className="contact__button">Write me {" "}
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