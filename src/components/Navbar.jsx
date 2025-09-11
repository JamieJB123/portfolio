import { useState } from 'react'

export default function NavBar() {

    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <>
        <nav>
            <div>
                <h1>MyPortfolio</h1>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="burger-menu" onClick={() => setIsOpen((prevState) => !prevState )}>&#9776;</div>
        </nav>
        <h1 className={isOpen ? "navbar-open" : ""}>Hello world!</h1>
        </>
    )
}
