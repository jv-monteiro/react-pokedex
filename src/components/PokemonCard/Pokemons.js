import React, {useContext,useState} from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import style from './styles.css'
import Modal from '../Modal/modal.js'

import FavIcon from '../../assets/Fav-full.png'
import FavOff from '../../assets/Fav.png'

export default function PokemonCard(props){
    const {favoritePokemons, updateFavorites} = useContext(FavoriteContext)
    const [modalVisible, setModalVisible] = React.useState(false)
    const {pokemon} = props
    

    const favOff = () =>{
        const style = {
            width: 16
        }
        return(
            <img src={FavOff} style={style}></img>
        )
    }
    const favIcon = () =>{
        const style = {
            width: 16
        }

        return(
            <img src={FavIcon} style={style}></img>
        )
    }
    const heart = favoritePokemons.includes(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)) ?  favIcon() : favOff() ;



    return(
        <div>
            <button onClick={()=> setModalVisible(true)} className="pokemonBtn">
                <div className="Card-Box">
                    <div className="Card-col-1">
                        <img src= {pokemon.sprites.other["official-artwork"].front_default}></img>
                    </div>
                    <div className="Card-col-2">
                        <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                        <p>{pokemon.types.map((type, index) => {
                            return(
                                <div key={index}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                        })}
                        </p>
                    </div>
                    <div className="Card-col-3">
                        <p>#{pokemon.id}</p>
                        <div>{heart}</div>
                    </div>
                </div>
            </button>
            {modalVisible ? (<Modal onClose={()=> setModalVisible(false)}
                                pokemonName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                pokemonSprite={pokemon.sprites.other["official-artwork"].front_default}
                                pokemonId={pokemon.id}
                                pokemonType={pokemon.types.map((type, index) => {
                                    return(
                                        <div key={index}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                                    )
                                })}
                                pokemonMoves={pokemon.moves.map((move, index) =>{
                                    return(
                                    <div key={index}>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</div>
                                    )
                                })}
                                pokemonFav={favoritePokemons}
                            />) : null}
        </div>
        
    )
}