import React, { Children,useContext } from "react";
import style from './styles.css'
import FavoriteContext from "../../contexts/favoritesContext";

import FavIcon from '../../assets/Fav-full.png'
import FavOff from '../../assets/Fav.png'

export default function Modal(props){

    const {pokemonName, pokemonSprite, pokemonType, pokemonId, pokemonMoves, pokemonFav, onClose,pokemon} = props
    const {favoritePokemons, updateFavorites} = useContext(FavoriteContext)

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
                <div className="Modal-Container">
                    
                    <div className="Modal-Close" >
                        <button className="Modal-FavBtn" onClick={favoriteBtn}>{heart}</    button>
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