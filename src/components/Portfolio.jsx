export default function Portfolio() {
    return (
        <>
        <section id="portfolio" className="portfolio-section flex flex-col items-center md:grid grid-cols-[4fr_6fr] gap-4">
            <div className="portfolio-title flex justify-center items-center gap-4 ps-4">
                <hr className="w-1/3"/>
                <h2 className="text-5xl">Portfolio</h2>
                <hr className="w-1/3"/>
            </div>
            <div className="list-container p-20 ps-30">
                <ul className="flex flex-col gap-8">
                    <li>
                        <div className="flex items-center gap-6">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/assembly-endgame.jpg" alt="Portfolio image of Assembly Endgame React project" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                <h3>Assembly Endgame</h3>
                                <a href="https://jamiejb123.github.io/react-assembly-endgame/" target="_blank" rel="no_opener">Live Link</a>
                                <p>Practice project to strengthen my understanding of core React concepts.</p>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                Content
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/recipe-maker.jpg" alt="Portfolio image of AI integrated recipe maker React project" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                Content
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/companion-app.jpg" alt="" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                Content
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/chaos-cards.jpg" alt="" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                Content
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/dirty-water.jpg" alt="" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                Content
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <div className="portfolio-image-wrapper">
                                <img src="/src/assets/portfolio/healthy-mind.jpg" alt="" />
                            </div>
                            <div className="portfolio-info-wrapper">
                                Content
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}
