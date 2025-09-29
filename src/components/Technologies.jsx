import cards from '../../cards'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'

export default function Technologies() {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0 0"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const [ flippedCards, setFlippedCards ] = useState({})

    const toggleFlipped = (id) => {
        setFlippedCards((prev) => (
            {
                ...prev,
                [id]: !prev[id]
            }
        ))
    }

    const cardElements = cards.map((card) => {
        const isFlipped = flippedCards[card.id] || false
        return (
            <div
                className="card-container w-64 h-80 perspective"
                key={card.id}
                aria-label={`Technology card: ${card.title}.`}>
                <div
                    className={`card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180 ${isFlipped ? "rotate-y-180" : ""}`}
                    onClick={() => toggleFlipped(card.id)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleFlipped(card.id);
                        }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isFlipped}
                    aria-label={`Technology Card: ${card.title}. ${isFlipped ? "Back-side shown." : "Front-side shown."}`}
                    >
                    {/* Front */}
                    <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                        <img className="card-image" src={card.image} alt={card.alt}></img>
                    </div>
                    {/* Back */}
                    <div className="back-side w-full h-full flex flex-col items-center justify-center backface-hidden rotate-y-180 ">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-content">{card.content}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <motion.section
                id="tech-section"
                style={{opacity}}
                ref={ref}
            >
                <div
                    className="technology-title flex justify-center items-center gap-4"
                    >
                    <hr className="w-7/24"/>
                    <div className="text-3xl md:text-5xl">Technologies</div>
                    <hr className="w-7/24"/>
                </div>
                <div
                    className="flex justify-center items-center"
                    >
                    <section className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 px-auto">
                        {cardElements}
                    </section>
                </div>
            </motion.section>
        </>
    )
}
