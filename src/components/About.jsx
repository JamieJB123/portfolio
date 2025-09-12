export default function About() {
    return (
        <>
            <main>
                <section className="about-intro">
                        <h2>Junior Full Stack Developer</h2>
                        <p>Based in Cornwall, UK</p>
                </section>
                <div className="image-section">
                    <hr />
                    <div className="profile-image-container">
                    </div>
                </div>
                <section className="about-skills">
                    <h2>Skills:</h2>
                    <p>Over the last several months I have been honing my skills as a software developer across the stack. With a background in psychology and social care, I bring with me the same attentiveness, care and focus on user experience.</p>
                </section>
                <section className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180 ">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                    <div className="card-container w-64 h-80 perspective">
                        <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
                            {/* Front */}
                            <div className="front-side absolute w-full h-full flex items-center justify-center backface-hidden">
                                Front of Card
                            </div>
                            {/* Back */}
                            <div className="back-side w-full h-full flex items-center justify-center backface-hidden rotate-y-180">
                                Backside of Card
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
