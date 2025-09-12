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
                <section className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
                    {cardElements}
                </section>
            </main>

        </>
    )
}
