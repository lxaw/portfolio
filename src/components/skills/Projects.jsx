import React from 'react'
import { ProjectsText} from '../../TextTranslations/Skills/ProjectsText'

const Projects = (props) => {
  const projectText = ProjectsText[props.lang];
  return (
    <div className="skills__content">

        <h2 className="skills__title">{projectText['title']}</h2>

        <div className="skills__box">

            <div className="skills__group">
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleDjango']}</h2>
                        <span className="skills__level">{projectText['descDjango']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleReact']}</h2>
                        <span className="skills__level">{projectText['descReact']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleSymfony']}</h2>
                        <span className="skills__level">{projectText['descSymfony']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleRails']}</h2>
                        <span className="skills__level">{projectText['descRails']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleAndroid']}</h2>
                        <span className="skills__level">{projectText['descAndroid']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleC']}</h2>
                        <span className="skills__level">{projectText['descC']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleJava']}</h2>
                        <span className="skills__level">{projectText['descJava']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleDatabases']}</h2>
                        <span className="skills__level">{projectText['descDatabases']}</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i class="uil uil-award"></i>
                    <div>
                        <h2 className="skills__name">{projectText['titleMore']}</h2>
                        <span className="skills__level">{projectText['descMore']}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects