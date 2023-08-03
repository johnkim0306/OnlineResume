import React from 'react'
import './App.scss'
import { useState } from "react";
import {Home, Background, Nav, About, Contact, Work, Menu, Project, Footer} from './components';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Work />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App