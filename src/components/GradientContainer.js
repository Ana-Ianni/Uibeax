import React from 'react';
import Proposito from "./Proposito"
import Nosotros from "./Nosotros"
import Servicios from "./Servicios"
import Animation from "./Animation"
import Rueda from './Rueda';
import Proceso from './Proceso';

const GradientContainer = () =>{
    return(
        <div className="gradientBkg">
            <Proposito/>
            <Nosotros/>
            <Servicios/>
            <Rueda/>
            <Proceso/>
            <Animation/>
        </div>
    )
}

export default GradientContainer;