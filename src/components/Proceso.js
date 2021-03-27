import React from 'react';

const Proceso = () =>{
    return(
        <div className="proceso height padding">
            <div className="tituloProceso">
                <h2 className="titulo">Nuestro Proceso</h2>
            </div>

            <div className="procesoWrap">
                <div className="process">
                        <img src="/multimedia/entendemos.gif" alt=""/>
                        <h3 className="processTitle">Entendemos</h3>
                        <p className="processText">Analizamos el estado actual de la organización
                        co-identificando las oportunidades de
                        mejora</p>
                </div>
                <div className="process">
                        <img src="/multimedia/diagnostico.gif" alt=""/>
                        <h3 className="processTitle">Diagnosticamos</h3>
                        <p className="processText">Generamos un estado de situación que muestre potenciales oportunidades, desafíos y los puntos ciegos de la organización</p>
                </div>
                <div className="process">
                        <img src="/multimedia/desarrollo.gif" alt=""/>
                        <h3 className="processTitle">Desarrollamos</h3>
                        <p className="processText">Diseñamos planes de acción con especialistas en las
disciplinas y áreas de interés que el proyecto necesita</p>
                </div>
                <div className="process">
                        <img src="/multimedia/implemento.gif" alt=""/>
                        <h3 className="processTitle">Implementamos</h3>
                        <p className="processText">Ejecutamos las acciones diseñadas coordinando
los equipos de trabajo y acompañando al cliente durante el proceso</p>
                </div>
            </div>
        </div>
    )
}

export default Proceso