import React, { Children } from "react";
import style from './styles.css'

export default function Modal(props){

    const {pokemonName, pokemonSprite, pokemonType, pokemonId, pokemonMoves, onClose} = props

    const id='modal'
    const handleOutsideClick =(e)=>{
        if(e.target.id === id) onClose()
    }
    
    return(
        <div className="Modal">
            <div id={id} className="Modal-box" onClick={handleOutsideClick}>
                <div className="Modal-Container">
                    <div className="Modal-Close" >
                        <button className="Modal-CloseBtn" onClick={onClose}>X</button>
                    </div>
                    <div className="Modal-Content">
                       <div className="modalCol-1">
                       <img src={pokemonSprite}/>
                       </div>
                       <div className="modalCol-2">
                        <p className="pkmId">ID: #{pokemonId}</p>   
                        <p className="pkmName">{pokemonName}</p>
                        <p className="pkmType">{pokemonType}</p>
                       </div>
                       <div className="modalCol-3">
                        <h1>Moves:</h1>
                        <div className="modalMoves">
                            <p>{pokemonMoves}</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}