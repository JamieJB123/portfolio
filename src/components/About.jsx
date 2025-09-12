import cards from '../../cards'

export default function About() {

    const cardElements = cards.map((card) => {
        return (
            <div className="card-container w-64 h-80 perspective" id={card.id}>
                <div className="card relative w-full h-full transition-transform duration-700 transform-style hover:rotate-y-180">
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
            <div className="about-info" id="about">
                <section className="about-intro">
                        <h2>Junior Full Stack Developer</h2>
                        <p className="text-xl">Greater London, UK</p>
                </section>
                <div className="image-section">
                    <hr />
                    <div className="profile-image-container">
                    </div>
                </div>
                <section className="about-skills">
                    <h2>Skills:</h2>
                    <p className="text-xl">Over the last several months I have been honing my skills as a software developer across the stack. With a background in psychology and social care, I bring with me the same attentiveness, care and focus on user experience.</p>
                </section>
                <div className="glow2"></div>
            </div>
            <div className="technology-title flex justify-center items-center gap-4">
                <hr className="w-7/24"/>
                <div className="text-5xl">Technologies</div>
                <hr className="w-7/24"/>
            </div>
            <div className="flex justify-center items-center">
                <section className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 px-auto">
                    {cardElements}
                </section>
            </div>

        </>
    )
}
