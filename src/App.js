// import libs:
import React, {useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import './styles/GeneralStyles.css';

import Capybaras from "./pages/Capybaras.jsx";
import CapyFacts from './pages/CapyFacts.jsx';
import CapyWiki from "./pages/CapyWiki.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import './styles/reset.css';

const App = () => {
  useEffect(() => {
    document.title = "Capybara-web";
  }, []);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Capybaras />}/>
        <Route path="/CapyFacts" element={<CapyFacts />}/>
        <Route path="/CapyWiki" element={<CapyWiki />}/>
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App;