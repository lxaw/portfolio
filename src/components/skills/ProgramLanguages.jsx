import React from 'react'
import { ProgrammingLanguagesText } from '../../TextTranslations/Skills/ProgrammingLanguagesText'

const ProgramLanguages= (props) => {
  const programmingLanguagesText = ProgrammingLanguagesText[props.lang];
  return (
    <div className="skills__content">

        <h2 className="skills__title">{programmingLanguagesText['title']}</h2>

        <div className="skills__box">

            <div className="skills__group">
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{programmingLanguagesText['skillsName']}</h2>
                        <span className="skills__level">
                            {programmingLanguagesText['skillsLevel']}
                        </span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramLanguages