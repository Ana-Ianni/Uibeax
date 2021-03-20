import React from 'react';

const Valores = () =>{
    return(
        <div className="valores">
            <div className="tituloValores">
                <h2>Valores</h2>
            </div>

            <div className="valoresWrap">
                <div className="valor">
                        <img src="/multimedia/transparencia.gif" alt="" className="valoresImg"/>
                        <p>Transparencia</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/libertad.gif" alt="" className="valoresImg"/>
                        <p>Libertad</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/explorar.gif" alt="" className="valoresImg"/>
                        <p>Explorar</p>
                </div>
                <div className="valor">
                        <img src="/multimedia/empatia.gif" alt="" className="valoresImg"/>
                        <p>Empatía</p>
                </div>
            </div>
        </div>
    )
}

export default Valores