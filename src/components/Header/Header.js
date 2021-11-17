import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Header.css'

function Header() {
    const history = useHistory()
    return (
        <header className="header">
            <div className="header_logo" onClick={() => history.push('/')}>Job <span>Portal</span></div>
            <form action="#" className="header__search">
                <input type="text" className="header__searchInput" placeholder="Search candidate"/>
                <span className="header__searchBtn">
                    <i className="ion-android-search"></i>
                </span>
            </form>
            <div className="header__nav">
                <NavLink to={"/shortlisted"} style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionTop">Shortlisted</span>
                        <span className="header__optionBottom">Candidate</span>
                    </div>
                </NavLink>
                <NavLink to={"/rejected"} style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionTop">Rejected</span>
                        <span className="header__optionBottom">Candidate</span>
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header
