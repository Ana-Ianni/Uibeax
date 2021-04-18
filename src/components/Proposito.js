import React from 'react';

const Proposito = () =>{
    return(
        <>
        <div className="proposito height padding" id="proposito">
            <div className="propositoLeft">
                <h2 className="titulo" >Propósito</h2>
                <p>
                Descubrimos lo que enciende a las personas para que la suma de sus pasiones construya una organización sana, productiva y feliz.
                </p>
            </div>
            <div className="propositoRight">
                <img src="/multimedia/proposito.gif" alt=""/>
            </div>
        </div>


        <div className="propositoSm height padding" id="proposito">
                <div className="tituloWrap">
                    <h2 className="titulo propositoBg" >Propósito</h2>
                </div>
                <img src="/multimedia/proposito.gif" alt=""/>
                <p className="mobileText">
                Descubrimos lo que enciende a las personas para que la suma de sus pasiones construya una organización sana, productiva y feliz.
                </p>
        </div>
        </>
    )
}

export default Proposito;