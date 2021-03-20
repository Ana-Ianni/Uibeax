import React from 'react';

const NavBar = () =>{
    return(
        <div className="navBar">
            <img src="/multimedia/logo-nav.svg" alt="Logo Uibeax" className="logo"/>

            <div className="linksWrap">
                <ul>
                    <li>
                        <a href="#proposito">Propósito</a>
                    </li>
                    <li>
                        <a href="#nosotros">¿Quienes somos?</a>
                    </li>
                    <li>
                        <a href="#servicios">¿Qué hacemos?</a>
                    </li>
                </ul>
                <button className="btnNav"><a href="#contacto" >Contactanos</a></button>
            </div>
        </div>
    )
}

export default NavBar;