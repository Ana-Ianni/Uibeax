import React from 'react';
import Proposito from "./Proposito"
import Servicios from "./Servicios"
import Animation from "./Animation"
import Rueda from './Rueda';
import Proceso from './Proceso';

const GradientContainer = () =>{
    return(
        <div className="gradientBkg">
            <Proposito/>
            <Servicios/>
            <Rueda/>
            <Proceso/>
            <Animation/>
        </div>
    )
}

export default GradientContainer;