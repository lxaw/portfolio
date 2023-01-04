import React from 'react'
import "./skills.css";
import Projects from "./Projects";
import ProgramLanguages from './ProgramLanguages';
import { SkillsTitleText } from '../../TextTranslations/Skills/SkillsTitleText';

const Skills = (props) => {
  const skillsTitleText = SkillsTitleText[props.lang]
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">{skillsTitleText['title']}</h2>
        <div className="skills__container container grid">
            <ProgramLanguages lang = {props.lang}/>
            <Projects lang = {props.lang}/>
        </div>
    </section>
  )
}

export default Skills;