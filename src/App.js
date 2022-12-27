import './App.css';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollUp from './components/scrollUp/ScrollUp';

import {useState} from "react";
import { HeaderText } from './TextTranslations/Header/HeaderText';
import { DataText } from './TextTranslations/Home/DataText';

function App() {
  var [inJapanese,setInJapanese] = useState(false);

  const switchLanguage = () => {
    setInJapanese(!inJapanese);
  }

  return (
    <>
      <Header onClickLanguage = {()=>{switchLanguage()}} lang = {inJapanese ? "JA" : "EN"} />
      <main className = 'main'>
        <Home lang = {inJapanese ? "JA":"EN"}/>
        <About lang = {inJapanese ? "JA":"EN"}/>
        <Skills lang = {inJapanese ? "JA":"EN"}/>
        <Contact lang = {inJapanese ? "JA":"EN"}/>
      </main>
      <Footer lang = {inJapanese ? "JA":"EN"}/>
      <ScrollUp/>

    </>
  );
}

export default App;
