// import { Link } from 'react-router-dom'
import logo from'../img/logo-explore.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer= () => {
    return ( 
        <footer>
            <section id="footer-grid">
                <article>
                    <img src={logo} alt=""/>
                    <p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                    <p>©2020 Thousand Sunny. All rights reserved</p>
                </article>

                <article>
                    <h4>Destinations</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Africa" target="_blank">Africa</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/United_States" target="_blank">America</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Asia" target="_blank">Asia</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Europe" target="_blank">Europe</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Americas" target="_blank">America</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Tourist_attraction#Tourist_destination" target="_blank">Destination Guides</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Gift" target="_blank">Pictorial & Gifts</a></li>
                        <li><a href="" target="_blank">Special Offers</a></li>
                        <li><a href="" target="_blank">Delivery Times</a></li>
                        <li><a href="" target="_blank">FAQs</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Interests</h4>
                    <ul>
                        <li><a href="https://en.wikipedia.org/wiki/Adventure_travel" target="_blank">Adventure Travel</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Culture" target="_blank">Art And Culture</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Nature" target="_blank">Wildlife And Nature</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Family" target="_blank">Family holidays</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Culinary_tourism" target="_blank">Food And Drink</a></li>
                    </ul>
                </article>
            </section>
            <br/>
            <div id="social-bar">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <FontAwesomeIcon icon={['fab', 'youtube']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </div>
        </footer>
     );
}
 
export default Footer;