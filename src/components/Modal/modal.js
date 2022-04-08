import React, { Children,useContext, useEffect } from "react";
import style from './styles.css'
import FavoriteContext from "../../contexts/favoritesContext";


import FavIcon from '../../assets/Fav-full.png'
import FavOff from '../../assets/Fav.png'

import { TypeColors } from "../Utilis/Utilis";


export default function Modal(props){

    const {pokemonName, pokemonSprite, pokemonType, pokemonId, pokemonMoves, pokemonFav, onClose,pokemon, typeColor,pokemonSpeed,pokemonHp,pokemonAtk,pokemonDef,pokemonSAtk,pokemonSDef,evoChain} = props
    const {favoritePokemons, updateFavorites} = useContext(FavoriteContext)

    

    //Evolution Chain
    
    
    
    console.log('Esse é na modal',evoChain)
    

    //BackgroundColor
    let finalColor;
    if(pokemonType.length){
        finalColor = TypeColors(typeColor, pokemonType.length)
    }
    

    //Icon
    const id='modal'
    const handleOutsideClick =(e)=>{
        if(e.target.id === id) onClose()
    }

    const favoriteBtn = () =>{
        updateFavorites(pokemonName)
    }
    
    

    const favOff = () =>{
        const style = {
            width: 24
        }
        return(
            <img src={FavOff} style={style}></img>
        )
    }
    const favIcon = () =>{
        const style = {
            width: 24
        }

        return(
            <img src={FavIcon} style={style}></img>
        )
    }
    const heart = favoritePokemons.includes(pokemonName) ?  favIcon() : favOff() ;
    
    return(
        <div className="Modal">
            <div id={id} className="Modal-box" onClick={handleOutsideClick}>
                <div className="Modal-Container"  style={{backgroundColor: `${finalColor}` }}>
                    
                    <div className="Modal-Close" >
                        <button className="Modal-FavBtn" onClick={favoriteBtn}>{heart}</    button>
                        <button className="Modal-CloseBtn" onClick={onClose}>X</button>
                    </div>
                    <div className="Modal-Content">

                       <div className="modalCol-1">
                           <div className="id">
                           <p className="pkmId">ID: #{pokemonId}</p>
                           </div>
                       <div className="name">  
                           <p className="pkmName">{pokemonName}</p>
                       </div>
                       <img src={pokemonSprite}/>
                       <div className="pkmType">
                           <p>{pokemonType[0]}</p>
                           <p>{pokemonType[1]}</p>
                       </div>
                       </div>

                        <div className="modalRow-2">
                            <div className="stats">Stats:</div>
                            <div className="modalCol-2">
                            
                                <div className="HP">
                                    <h4>HP:</h4>
                                    <p>{pokemonHp}</p>
                                </div>
                                <div className="ATK">
                                    <h4>ATK:</h4>
                                    <p>{pokemonAtk}</p>
                                </div>
                                <div className="DEF">
                                    <h4>DEF:</h4>
                                    <p>{pokemonDef}</p>
                                </div>
                                <div className="SATK">
                                    <h4>S-ATK:</h4>
                                    <p>{pokemonSAtk}</p>
                                </div>
                                <div className="SDEF">
                                    <h4>S-DEF:</h4>
                                    <p>{pokemonSDef}</p>
                                </div>
                                <div className="SPD">
                                    <h4>SPEED:</h4>
                                    <p>{pokemonSpeed}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="modalCol-3">
                        
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}