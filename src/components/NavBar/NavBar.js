import React, {useContext} from 'react';
import style from './styles.css'

import Logo from '../../assets/logo.png'
import FavoriteContext, { FavoriteProvider } from '../../contexts/favoritesContext';

export default function NavBar(){

    const {favoritePokemons} = useContext(FavoriteContext)


    return(
        <div>
            <nav className='Nav-container'>
                <div>
                   <img src={Logo} width={250} className='Logo'></img>
                </div>
                <div className='Fav'> Favorites ({favoritePokemons.length})</div>
            </nav>
        </div>
    )
}