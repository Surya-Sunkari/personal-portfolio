import React, {useState} from 'react';


import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
// import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {

    const [nav, setNav] = useState(false);

    return(
        <div className="bg-black overflow-x-hidden">
            <NavBar nav={nav} setNav={setNav}/>
            <Home nav={nav}/>
            <About />
            <Portfolio />
            {/* <Experience /> */}
            <Contact />
            <SocialLinks />
        </div>
    )
}

export default App;