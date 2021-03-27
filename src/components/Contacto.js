import React from 'react';

const Contacto = () =>{
    return(
        <div className="contacto padding" id="contacto">
            <div>
                <h2 className="titulo">Contactanos</h2>
            </div>
            <div>
                <img src="/multimedia/img-form.png" alt="" className="nube"/>
            </div>
            <form action="mailto:contacto@uibeax.com" method="post" enctype="text/plain">
                <input type="text" name="name" placeholder="Nombre completo"/>

                <input type="text" name="mail" placeholder="Tu mail"/>

                <input type="text" name="text" placeholder="¿Qué te gustaría saber?"/>

                <div className="sendWrap">
                    <button type="submit" className="send">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto