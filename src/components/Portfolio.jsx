import portfolioData from '../../portfolio'
import { motion } from 'motion/react'

export default function Portfolio() {

    const portfolioElements = portfolioData.map((portfolio, idx) => {

        const variants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2 * idx,
                }
            }
        }


        const languageElements = portfolio.languages.map((language) => {
            return <span className="languages">{language}</span>
        })
        const frameworkElements = portfolio.frameworks.map((framework) => {
            return <span className="frameworks">{framework}</span>
        })
        return <motion.li
            key={portfolio.id}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.2 }}
            >
                    <div className="flex items-center gap-6">
                        <div className="portfolio-image-wrapper shrink-0">
                            <img src={portfolio.image} alt={portfolio.alt} />
                        </div>
                        <div className="portfolio-info-wrapper">
                            <h3 className="portfolio-inner-title">{portfolio.title}</h3>
                            {portfolio.liveLink && <a className="portfolio-link" href={portfolio.liveLink} target="_blank" rel="no_opener">Live Link</a>}
                            <p className="portfolio-content">{portfolio.content}</p>
                            <div className="tech-container flex flex-wrap">
                                <div className="language-element-container">
                                    {languageElements}
                                </div>
                                { portfolio.frameworks && <div >
                                    {frameworkElements}
                                </div>}
                            </div>
                        </div>
                    </div>
                </motion.li>
    })

    return (
        <>
        <section id="portfolio" className="portfolio-section flex flex-col items-center md:grid grid-cols-[3fr_7fr] gap-4">
            <div className="portfolio-title flex justify-center items-center gap-4 ps-4">
                <hr className="w-1/3"/>
                <h2 className="purple-titles text-5xl">Portfolio</h2>
                <hr className="w-1/3"/>
            </div>
            <div className="list-container ps-30 pe-10">
                <ul
                    className="flex flex-col gap-8">
                    {portfolioElements}
                </ul>
            </div>
        </section>
        </>
    )
}
