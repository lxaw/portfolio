import React from 'react'
import "./skills.css";
import FrontendBackend from "./FrontendBackend";
import ProgramLanguages from './ProgramLanguages';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container container grid">
            <ProgramLanguages/>
            <FrontendBackend/>
        </div>
    </section>
  )
}

export default Skills;