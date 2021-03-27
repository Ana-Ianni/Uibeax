import React from 'react';

const Cover = () =>{

    return(
        <div className="cover">
            <video autoPlay loop muted playsInline width="100%">
                <source type="video/mp4" src={process.env.PUBLIC_URL + "/multimedia/cover_baja.mp4"}/>
            </video>
        </div>
    )
}

export default Cover;


/*      <img src="/multimedia/cover.png" alt="" className="coverImg"/>      */