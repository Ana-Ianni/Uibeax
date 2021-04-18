import React from 'react';
import Equipo from "./TeamList";

const CardTeam = () => {

    const cardIntegrante = Equipo.map((member)=>
            <div className="teamCard" key={member.id}>
                <img src={member.img} className="img"/>
                <div className="memberInfo">
                    <a href={member.in}>
                        <img src="/multimedia/logo-in.png" alt="" className="logo-in"/>
                    </a>
                    <p className="mobileText">{member.name}</p>
                </div>
            </div>
    )

    return(
        <div className="teamCardWrap">
            {cardIntegrante}
        </div>
    )
}

export default CardTeam;
