import React, {useContext} from 'react';
import style from './styles.css'

import Logo from '../../assets/logo.png'
import FavoriteContext, { FavoriteProvider } from '../../contexts/favoritesContext';

export default function NavBar(){

    const {favoritePokemons} = useContext(FavoriteContext)


    return(
        <div className='Nav'>
            <nav className='Nav-container'>
                <div>
                   <a href="/"><img src={Logo} width={250} className='Logo'></img></a>
                </div>
                <button className='Fav'> Favorites ({favoritePokemons.length})</button>
                
            </nav>
        </div>
    )
}