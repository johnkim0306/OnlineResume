import React from 'react'
import './nav.scss'

export function Nav({ menuOpen, setMenuOpen }) {
    return (
        <div className={"nav " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo"> John's portfolio</a>
                    {['home', 'about', 'work', 'project', 'contact'].map((item) =>
                        <div key={`link-${item}`} className="itemContainer">
                            <a href={`#${item}`}>{item}</a>
                        </div>
                    )}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
