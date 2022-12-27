import React from 'react'
import { InfoText } from '../../TextTranslations/About/InfoText'

const Info = (props) => {
  const infoText = InfoText[props.lang];
  return (
    <h2>{infoText['aboutTitle']}</h2>
  )
}

export default Info