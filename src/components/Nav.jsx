import { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar-fixed">
            <div className="navbar-content">
                <a href="#home">
                    <img id="nav-logo" src="src/assets/nav-logo.png" alt="nav-logo"></img>
                </a>
                <div className="burger-menu" onClick={() => setIsOpen((prev) => !prev)}>&#9776;</div>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a onClick={() => setIsOpen(false)} href="#home">Home</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#portfolio">Portfolio</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
