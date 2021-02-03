import { Link } from 'react-router-dom'
import logo from'../img/logo-explore.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer= () => {
    return ( 
        <footer>
            <section id="footer-grid">
                <article>
                    <img src={logo} alt="logo explore"/>
                    <p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                </article>

                <article>
                    <h4>Destinations</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Africa" target="_blank" rel="noopener noreferrer">Africa</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/United_States" target="_blank" rel="noopener noreferrer">America</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Asia" target="_blank" rel="noopener noreferrer">Asia</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Europe" target="_blank" rel="noopener noreferrer">Europe</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Americas" target="_blank" rel="noopener noreferrer">America</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Tourist_attraction#Tourist_destination" target="_blank" rel="noopener noreferrer">Destination Guides</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Gift" target="_blank" rel="noopener noreferrer">Pictorial & Gifts</a></li>
                        <li><a href="https://amazon.de" target="_blank" rel="noopener noreferrer">Special Offers</a></li>
                        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Delivery Times</a></li>
                        <li><Link to="/contact" target="_blank">FAQs</Link></li>
                    </ul>
                </article>

                <article>
                    <h4>Interests</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Adventure_travel" target="_blank" rel="noopener noreferrer">Adventure Travel</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Culture" target="_blank" rel="noopener noreferrer">Art And Culture</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Nature" target="_blank" rel="noopener noreferrer">Wildlife And Nature</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Family" target="_blank" rel="noopener noreferrer">Family holidays</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Culinary_tourism" target="_blank" rel="noopener noreferrer">Food And Drink</a></li>
                    </ul>
                </article>
            </section>
            <hr className="longLine"/>
            <div id="social-bar">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                <FontAwesomeIcon icon={['fab', 'youtube']} size="2x"/>
            </div>
        </footer>
     );
}
 
export default Footer;