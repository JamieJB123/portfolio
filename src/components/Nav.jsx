import { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav aria-label="Main navigation" className="navbar-fixed">
            <div className="navbar-content">
                <a href="#home">
                    <img id="nav-logo" src="assets/nav-logo.png" alt="nav-logo"></img>
                </a>
                <button
                    className="burger-menu"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="main-menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    &#9776;
                </button>
            </div>
            <ul
                id="main-menu"
                className={`nav-links ${isOpen ? "active" : ""}`}
            >
                <li><a onClick={() => setIsOpen(false)} href="#home">Home</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#portfolio">Portfolio</a></li>
                <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
