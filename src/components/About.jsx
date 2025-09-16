import { motion } from 'motion/react'
import { useState } from 'react'
import about from '../../about'

export default function About() {

    const [ openIndex, setOpenIndex ] = useState(null)

    const aboutSegments = about.map(( aboutSegment, index ) => {
        const variants = {
        float: {
            y: [0, -5, 0, 5],
            x: [0, 3, 0, -3],
            rotate: [-1, 1, -1, 1],
            transition: {
                duration: 4 + Math.random(),
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
            },
        },
        hover: { scale: 1.05, y: -10 },
        tap: { scale: 0.95, rotate: 2.5, border: "4px solid #312E81" }
        }
        return (
            <motion.div
                key={aboutSegment.title}
                className="about-segments p-5 flex flex-col justify-center items-center"
                variants={variants}
                animate="float"
                whileHover="hover"
                whileTap="tap"
                >
                <button
                    className="w-full text-xl text-center p-5"
                    aria-expanded={openIndex === index}
                    aria-controls={`accordion-panel-${index}`}
                    id={`accordion-header-${index}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    {aboutSegment.title}
                </button>
                {openIndex === index && (
                <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                className="ps-3 pe-3 pb-3 pt-1"
                >
                    <p>{aboutSegment.content}</p>
                </div>
            )}
            </motion.div>)
    })

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    const itemLeft = {
        hidden: {
            opacity: 0,
            x: "-100vw",
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 50, damping: 16, mass: 2 }
        }
    }

    const itemRight = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    }


    return (
        <>
            <motion.div
                className="about-info overflow-hidden"
                id="about"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2 }}
                >
                <motion.section
                className="about-intro"
                variants={itemLeft}
                >
                        <h2>Full Stack Web Developer</h2>
                        <p className="text-xl">Greater London, UK</p>
                </motion.section>
                <motion.div
                className="image-section"
                variants={itemRight}
                >
                    <hr className='glow2'/>
                    <div className="profile-image-container">
                    </div>
                </motion.div>
                <motion.section
                className="about-skills"
                variants={itemLeft}
                >
                    <h2>About:</h2>
                    <div className="about-container grid lg:grid-cols-3 gap-8">
                        {aboutSegments}
                    </div>
                </motion.section>
            </motion.div>
        </>
    )
}
