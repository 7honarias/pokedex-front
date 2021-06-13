import React from 'react';
import '../styles/navBar.css';


function NavBar () {
    const urlImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return(
    <div>
        <nav>
            <img alt="logo"
            className="logoImage"
            src={urlImg} />
        </nav>
    </div>);
}

export default NavBar;