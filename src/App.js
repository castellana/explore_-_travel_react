import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import Destinations from './components/Destinations'
import About from './components/About'
import Partner from './components/Partner'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' //social media icons 'fab'

import './App.css';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
    // NavLink
} from "react-router-dom";



library.add(fab) //tiene que estar aquí abajo, si no, no funciona

function App() {
    return (
        <Router>
            <Navigation />
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/destinations" component={Destinations}/>
                <Route path="/about" component={About}/>
                <Route path="/partner" component={Partner} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Route component={Error} />
            </Switch>
            <Footer/>
        </ Router>
    );
}

export default App;
