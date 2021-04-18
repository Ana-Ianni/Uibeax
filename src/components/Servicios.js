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
                    <h2 className="titulo">¿Qué hacemos?</h2>
                </div>
                <p>
                Diseñamos soluciones creativas e innovadoras con el foco puesto en el crecimiento de la organización y las personas que la integran.
                </p>
            </div>
        </div>

        <div className="propositoSm height padding">
            <div className="tituloWrap" id="servicios">
                <h2 className="titulo" style={{backgroundColor:"#F160BB"}}>¿Qué hacemos?</h2>
            </div>
            <img src="/multimedia/servicios.gif" alt=""/>
            <p className="mobileText">
            Diseñamos soluciones creativas e innovadoras con el foco puesto en el crecimiento de la organización y las personas que la integran.
            </p>
        </div>

        </>
    )
}

export default Servicios;



