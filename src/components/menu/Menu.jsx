import React from 'react'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {['home', 'about', 'work', 'project', 'contact' ].map((item) =>
                    <li key={`link-${item}`} onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu
