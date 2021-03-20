import React from 'react';
import Equipo from "./TeamList";

const CardTeam = () => {

    console.log(Equipo)

    const cardIntegrante = Equipo.map((member)=>
            <div className="teamCard" key={member.id}>
                <img src={member.img} className="img"/>
                <p>{member.name}</p>
                <a href={member.in}>
                    <img src="/multimedia/logo-in.png" alt="" className="logo-in"/>
                </a>
            </div>
    )

    return(
        <div className="teamCardWrap">
            {cardIntegrante}
        </div>
    )
}

export default CardTeam;
