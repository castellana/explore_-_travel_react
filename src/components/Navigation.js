import { NavLink } from 'react-router-dom'
import logo from'../img/logo-explore.png'


const Navigation = () => {
    return ( 
        <main>
            <nav>
                <img src={logo} alt="logo"/>
                <ul>
                    <li><NavLink to="/" activeClassName="current" exact>Home</NavLink></li>
                    <li><NavLink to="/destinations" activeClassName="current">Destinations</NavLink></li>
                    <li><NavLink to="/about" activeClassName="current">About</NavLink></li>
                    <li><NavLink to="/partner" activeClassName="current">Partner</NavLink></li>
                    <li><NavLink to="/login" activeClassName="current" className="loginLink">LogIn</NavLink></li>
                    <li><NavLink to="/register" className="buttonOrange">Register</NavLink></li>
                </ul>
            </nav>
        </main>
     );
}
 
export default Navigation;