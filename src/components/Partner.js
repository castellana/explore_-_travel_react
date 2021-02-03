// import { Link } from "react-router-dom"
import stories from '../data/stories.json'
import StoryCard from './cards/StoryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Partner = () => {
    return ( 
        <main>
            <section id="testimonialsSec">
                <h2>Testimonials</h2>
                <article>
                    <div className="testiItem">
                        <div className="starsGroup">
                            <FontAwesomeIcon icon="star" size="2x" color="#FFBB0C"/>
                            <FontAwesomeIcon icon="star" size="2x" color="#FFBB0C"/>
                            <FontAwesomeIcon icon="star" size="2x" color="#FFBB0C"/>
                            <FontAwesomeIcon icon="star" size="2x" color="#FFBB0C"/>
                            <FontAwesomeIcon icon="star" size="2x" color="#FFBB0C"/>
                        </div>
                        <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>

                        <h3>Edward Newgate</h3>
                        <h4>Founder Circle</h4>
                    </div>
                    <img src="/img/man.png" alt=""/>
                </article>
            </section>
            <section id="storiesSec">
                <div className="secTitle-group">
                    <h2>Trending stories</h2>
                    <span to="/" className="orangeLink">View all &#x27A4; </span>
                </div>
                <article className="gallery2">
                    {stories.map((element, index) =>  {
                        return (<StoryCard 
                        element = {element}
                        key={index}
                        />    
                        )
                    })}
                </article>
            </section>
        </main>
     );
}
 
export default Partner;