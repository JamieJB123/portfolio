import Typing from './Typing'
import { motion, useScroll, useTransform } from 'motion/react'

export default function Home() {

    const { scrollYProgress } = useScroll()
    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [ "#312E81", "#9333EA", "#EC4899" ]
    )

    return (
        <>
            <header id="home" className="header-section">
                <motion.div
                    className="progress-bar"
                    style={{
                        transformOrigin: "left",
                        scaleX: scrollYProgress,
                        background: background,
                    }}
                    aria-hidden="true"
                />
                <Typing />
                <hr></hr>
                <div aria-hidden="true" className="glow"></div>
            </header>
        </>
    )
}
