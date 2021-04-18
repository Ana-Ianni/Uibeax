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

                <div className="sendWrap">
                    <button type="submit" className="send">Enviar</button>
                </div>
            </form>

            <a href="#top" className="backTop">
                <img src="/multimedia/boton_subir.png" alt=""/>
            </a>
        </div>
    )
}

export default Contacto