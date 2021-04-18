import React from 'react';

const Cover = () =>{

    return(
        <div className="cover" id="top">
            <video autoPlay loop muted playsInline width="100%">
                <source type="video/mp4" src={process.env.PUBLIC_URL + "/multimedia/cover_baja.mp4"}/>
            </video>
            <h1 className="slogan">Ideas with purpose</h1>

            <div className="fixedBtns">
                <a href="https://www.linkedin.com/company/72259372/admin/" className="inF btnF">
                    <img src="/multimedia/logo-in.png" alt=""/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5491159209693&text=&source=&data=&app_absent=" className="wspF btnF">
                    <img src="/multimedia/wsp.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Cover;