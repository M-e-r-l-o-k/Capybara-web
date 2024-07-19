import React from "react";
import { Link } from "react-router-dom";

import "../styles/GeneralStyles.css";
import "./Header.css";

import capybara_logo from "../assets/simple-capybara-logo.png";

const Header = () => {
    return (
        <div>
            <div className='div_flex_row header_justify-content header'>
                <Link to="/">
                    <img src={capybara_logo} width={100} />
                </Link>

                <div className='div_flex_row'>
                    <Link to="/" className='p_header a_link'>КАПИБАРЫ</Link>
                    <Link to="/CapyFacts" className='p_header a_link'>КапиФакты</Link>
                    <Link to="/CapyWiki" className='p_header a_link'>КапиВики</Link>
                </div>
            </div>
        </div>
    )
};

export default Header;