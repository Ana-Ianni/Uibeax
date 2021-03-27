import React from 'react';

const Servicios = () =>{
    return(
        <>
        <div className="servicios height padding" id="servicios">
            <div className="serviciosLeft">
                <img src="/multimedia/servicios.gif" alt=""/>
            </div>
            <div className="serviciosRight">
                <div>
                    <h2 className="titulo">Servicios</h2>
                </div>
                <p>
                Diseñamos soluciones creativas e innovadoras con el foco puesto en el crecimiento de la organización y las personas que la integran.
                </p>
            </div>
        </div>

        <div className="propositoSm height padding" id="servicios">
        <div className="tituloWrap">
            <h2 className="titulo  serviciosBg" >¿Qué hacemos?</h2>
        </div>
        <img src="/multimedia/servicios.gif" alt=""/>
        <p className="mobileText">
            Somos personas escuchando a otras.
            Somos una agencia de diseño en innovación y transformación cultural
            que impulsa constantemente la creación de organizaciones vivas que sean del talle exacto de todos los que la conforman pero lo suficientemente elásticas para adaptarse al cambio
            y gestionar la incertidumbre.
        </p>
        </div>

        </>
    )
}

export default Servicios;



