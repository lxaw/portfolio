import React from 'react'
import {HobbiesText} from "../../TextTranslations/Hobbies/InfoText"

const Info = (props) => {
  return (
    <h2>{HobbiesText[props.lang]['hobbiesTitle']}</h2>
  )
}

export default Info