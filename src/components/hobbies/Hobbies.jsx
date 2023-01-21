import React from 'react'
import MeImage from "../../assets/me_pari.JPG"
import Info from './Info'
import {HobbiesText} from  "../../TextTranslations/Hobbies/HobbiesText"

const Hobbies = (props) => {
  return (
    <section className="about section" id="about">
        <div className="about__container container grid">
            <div className="about__data">
                <Info lang={props.lang}/>
                <p className="about__description">
                    {HobbiesText[props.lang]['text']}
                </p>
            </div>
            <img src={MeImage}  alt="" className="about__img" />
        </div>
    </section>

  )
}

export default Hobbies;