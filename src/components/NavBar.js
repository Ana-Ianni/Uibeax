import React from 'react';

const NavBar = () =>{
    return(
        <div className="navBar padding">
            <a className="logoWrap" href="#top">
                <img src="/multimedia/logo-nav.svg" alt="Logo Uibeax" className="logo"/>
            </a>
            <div className="linksWrap">
                <ul>
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

/*                    <li>
                        <a href="#proposito">Propósito</a>
                    </li>  */