import React, {useEffect,useState} from 'react'
import './App.css';

import {searchPokemon, getPokemon, getPokemonData} from './components/Api.js'

import gitLogo from './assets/github.png'
import linkeLogo from './assets/linkedin.png'


import NavBar from './components/NavBar/NavBar.js'
import SearchBar from './components/SearchBar/SearchBar.js'
import Pokedex from './components/Pokedex/Pokedex.js'
import { FavoriteProvider } from './contexts/favoritesContext';

function App() {
  const [loading, setLoading] = React.useState(false)
  const [pokemons, setPokemons] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(0)
  const [favorites, setFavorites] = React.useState([])
  const [notFound, setNotFound] = React.useState(false)

  const favoritesKey = "f"
  const itensPerPage = 25

  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      setNotFound(false)
      const result = await getPokemon(itensPerPage,itensPerPage * page)
      const promises = result.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(result.count / itensPerPage))
      
    } catch (error) {
      console.log('fechPokemons error',error)
    }

  }

  useEffect(()=> { 
    fetchPokemons();
    console.log('carregou')
  },[page])

  const loadFavorites = () =>{
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }
  useEffect(()=>{
    loadFavorites()
  },[])


  const updateFavorites = (name) =>{
    const updateFavorites = [...favorites]
    const favoritesIndex = favorites.indexOf(name)
      if(favoritesIndex >= 0){
        updateFavorites.splice(favoritesIndex,1)
      }else{
        updateFavorites.push(name)
      }
      window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites)) 
      setFavorites(updateFavorites);
  }

  const onSearchHandler = async (pokemon) =>{
    if(!pokemon){
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true)
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }

  return (
    <FavoriteProvider
      value={{favoritePokemons: favorites, 
              updateFavorites: updateFavorites}}
      >
    <div className="App">
      <div className='NavBar'><NavBar/></div>
      <div className='SearchApp'>
        <SearchBar
          onSearch={onSearchHandler}/>
          {notFound ? (
            <div className='not-found'>
              Not Found!
            </div>
          ) :
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          />)}
      </div>
    </div>
    <div className='footer'>
      <div className='footer-row'>
        <p>Pokédex by João Monteiro</p>
        <a target='_blank' href='https://github.com/jv-monteiro'>
          <img src={gitLogo}></img>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/jvmonteiro/'>
          <img src={linkeLogo}></img>
        </a>
      </div>
    </div>
    </FavoriteProvider>
  );
}

export default App;
