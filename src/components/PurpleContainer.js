import React from 'react';
import Contacto from './Contacto';
import Equipo from "./Equipo";
import Valores from "./Valores";

const PurpleContainer = () =>{
    return(
        <div className="purpleBkg">
            
            <Valores/>
            <Equipo/>
            <Contacto/>

            <div className="descFooterWrap">
                <p className="descFooter">
                  © Uibeax 2021 Todos los derechos reservados
                </p>
            </div>

        </div>
    )
}

export default PurpleContainer;