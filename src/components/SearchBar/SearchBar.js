import React, { useEffect, useState } from "react";
import style from './styles.css'

import { searchPokemon } from "../Api";

export default function SearchBar(props){
    const [search, setSearch] = React.useState('')
    const {onSearch} = props

    const searchHandler = (e) =>{
        setSearch(e.target.value)
            if(e.target.value.lenght === 0){
                onSearch(undefined)
            }
        
    }
    //Está pegando a função searchHandle e passando o valor da const search
    const btnClick = () => {
        onSearch(search.toLowerCase())
    }
    
   

    return(
        <div className="SearchBar-Row">
            <div className="SearchBar">
                <input
                    value={search}
                    placeholder="Search Pokémon"
                    onChange={searchHandler}
                         
                ></input>
                <div className="SearchBtn">
                    <button onClick={btnClick}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}