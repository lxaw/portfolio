import React from 'react'
import { DataText } from '../../TextTranslations/Home/DataText'

const Data = (props) => {

  const dataText = DataText[props.lang];

  return (
    <div className="home__data">
        <h1 className="home__title">
          {dataText['name']}
        </h1>
        <h3 className="home__subtitle">{dataText['welcome']}</h3>
        <p className="home__description">
          {dataText['homeDescription']}
        </p>
    </div>
  )
}

export default Data