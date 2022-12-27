import React, {useState} from 'react'
import "./header.css";
import { HeaderText } from '../../TextTranslations/Header/HeaderText';

const Header = (props) => {

    // change background header
    window.addEventListener('scroll',function(){
        const header = document.querySelector('.header');
        if(this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    })
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav,setActiveNav] = useState("#home");

    const headerText = HeaderText[props.lang];

  return (
    <header className="header">
        <nav className="nav container">
            <p className="nav__logo" onClick={props.onClickLanguage}>
                {headerText['languageText']}
            </p>
            <div className={Toggle ? "nav__menu show-menu":"nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=>
                            setActiveNav('#home')} 
                            className={activeNav === "#home" ? "nav__link active-link" : 'nav__link'}>
                            <i className="uil uil-estate nav__icon"></i>
                            {headerText['homeTitle']}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={()=>
                            setActiveNav('#about')} 
                            className={activeNav === "#about" ? "nav__link active-link" : 'nav__link'}>
                            <i className="uil uil-user nav__icon"></i>
                            {headerText['aboutTitle']}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={()=>
                            setActiveNav('#skills')} 
                            className={activeNav === "#skills" ? "nav__link active-link" : 'nav__link'}>
                            <i className="uil uil-bolt nav__icon"></i>
                            {headerText['skillsTitle']}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=>
                            setActiveNav('#contact')} 
                            className={activeNav === "#contact" ? "nav__link active-link" : 'nav__link'}>
                            <i className="uil uil-envelope nav__icon"></i>
                            {headerText['contactTitle']}
                        </a>
                    </li>
                    
                    <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
                </ul>
            </div>
            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>    
            </div>
        </nav>
    </header>
  )
}

export default Header