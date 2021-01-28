import { Link } from "react-router-dom"

const Home = () => {
    return ( 
        <main>
            <section id="homeSec">
                <img src="/img/home.png" alt="illustration of woman doing paragliding"/>
                <article>
                    <img src="/img/element3.png" alt=""/>
                    <h2>A new way to explore the world</h2>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <Link to="/about" className="buttonOrange">Learn more</Link>
                </article>
            </section>
        </main>
     );
}
 
export default Home;