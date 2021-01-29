import { Link } from "react-router-dom"
import destinations from '../data/destinations.json'

import DestinationItem from './cards/DestinationCard'

const Destination = () => {
    return ( 
        <main>
            <section id="destinationSec">
                <div class="destination-title">
                    <h2>Featured destinations</h2>
                    <Link to="/" className="buttonOrange">View all &#x27A4;</Link>
                </div>
                <article className="gallery">
                    {destinations.map(element => <DestinationItem
                        image= {element.image}
                        destination = {element.destination}
                        country = {element.country}
                        id = {element.id}
                    />)}
                </article>
            </section>
        </main>
     );
}
 
export default Destination;