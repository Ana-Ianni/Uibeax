import React from 'react';

const Valores = () =>{
    return(
        <div className="valores height padding">
            <div className="tituloValores">
                <h2 className="titulo">Valores</h2>
            </div>

            <div className="valoresWrap">
                <div className="valor">
                        <img src="/multimedia/transparencia.gif" alt="" className="valoresImg"/>
                        <p className="mobileText">Transparencia</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/libertad.gif" alt="" className="valoresImg"/>
                        <p className="mobileText">Libertad</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/explorar.gif" alt="" className="valoresImg"/>
                        <p className="mobileText">Explorar</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/empatia.gif" alt="" className="valoresImg"/>
                        <p className="mobileText">Empatía</p>
                </div>
            </div>
        </div>
    )
}

export default Valores