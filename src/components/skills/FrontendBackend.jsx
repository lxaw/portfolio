import React from 'react'
import { FrontendBackendText } from '../../TextTranslations/Skills/FrontendBackendText'

const FrontendBackend = (props) => {
  const frontendBackendText = FrontendBackendText[props.lang];
  return (
    <div className="skills__content">

        <h2 className="skills__title">{frontendBackendText['title']}</h2>

        <div className="skills__box">

            <div className="skills__group">
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{frontendBackendText['titleDjango']}</h2>
                        <span className="skills__level">{frontendBackendText['descDjango']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{frontendBackendText['titleReact']}</h2>
                        <span className="skills__level">{frontendBackendText['descReact']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{frontendBackendText['titleSymfony']}</h2>
                        <span className="skills__level">{frontendBackendText['descSymfony']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{frontendBackendText['titleRails']}</h2>
                        <span className="skills__level">{frontendBackendText['descRails']}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontendBackend