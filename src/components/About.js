import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <main>
            <section id="aboutSec">
            <article>
                    <img src="/img/element3.png" alt=""/>
                    <h2>Guides by Thousand Sunny</h2>
                    <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                    <Link to="/about" className="buttonOrange">Download</Link>
                </article>
                <img src="/img/about.png" alt="Illustration man watching his mobile phone"/>
            </section>
        </main>
     );
}
 
export default About;