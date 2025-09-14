import { useEffect, useState } from 'react';

const text = ["Software Developer", "Front-end, back-end, full-stack", "DevJamie"]

export default function Typing() {

    const [ textIndex, setTextIndex ] = useState(0);
    const [ displayed, setDisplayed ] = useState("");
    const [ messageDisplay, setMessageDisplay ] = useState(false);
    const [ type, setType ] = useState(true);
    const [ cursor, setCursor ] = useState(true);

    useEffect(() => {
        let timeout;
        const currentText = text[textIndex];

        if (type) {
            if ( displayed.length < currentText.length ) {
                timeout = setTimeout(() => {
                    setDisplayed(currentText.slice(0, displayed.length + 1))
                }, 80);
            }
            else if ( textIndex < text.length - 1) {
                timeout = setTimeout(() => {
                    setType(false)
                }, 1000)
            }
            else {
                timeout = setTimeout(() => {
                    setCursor(false);
                    setMessageDisplay(true);
                }, 80)
            }
        }
        else {
            if ( displayed.length > 0 ) {
                timeout = setTimeout(() => {
                    setDisplayed(currentText.slice(0, displayed.length - 1 ))
                }, 80);
            }
            else {
                setType(true);
                setTextIndex((prevIndex) => prevIndex + 1 )
            }
        }
        return () => clearTimeout(timeout)

    }, [ textIndex, displayed, type, messageDisplay ])

    return (
        <>
            <div>
                <h1 className="ps-12">{displayed}<span className={cursor ? "typewriter-effect" : "hidden"}>|</span></h1>
                <h2 className={`header-message ${messageDisplay ? "visible" : ""}`}>Building custom web solutions across the stack.</h2>
            </div>
        </>
    )
}
