import { Link } from "react-router-dom"
import stories from '../data/stories.json'

import StoryItem from './cards/StoryCard'

const Partner = () => {
    return ( 
        <main>
            <section id="partnerSec">
                <div>
                    <h2>Featured destinations</h2>
                    <Link to="/">View all &#x27A4; </Link>
                </div>
                <article className="gallery">
                
                {stories.map(element => <StoryItem
                    image= {element.image}
                    title = {element.title}
                    description = {element.description}
                    id = {element.id}
                    />)}
                </article>
            </section>
        </main>
     );
}
 
export default Partner;