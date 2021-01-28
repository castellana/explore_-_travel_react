import { NavLink } from 'react-router-dom'
import logo from'../img/logo-explore.png'


const Navigation = () => {
    return ( 
        <main>
            <nav>
                <img src={logo} alt="logo"/>
                <ul id="nav-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/destinations">Destinations</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/partner">Partner</NavLink></li>
                    <li><NavLink to="/login">LogIn</NavLink></li>
                    <li><NavLink to="/register" className="buttonOrange">Register</NavLink></li>
                </ul>
            </nav>
        </main>
     );
}
 
export default Navigation;