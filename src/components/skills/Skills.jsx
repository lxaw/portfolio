import React from 'react'
import "./skills.css";
import FrontendBackend from "./FrontendBackend";
import ProgramLanguages from './ProgramLanguages';

const Skills = (props) => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container container grid">
            <ProgramLanguages lang = {props.lang}/>
            <FrontendBackend lang = {props.lang}/>
        </div>
    </section>
  )
}

export default Skills;