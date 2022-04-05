import React from "react";
import style from './styles.css'
import PokemonCard from "../PokemonCard/Pokemons";
import Pagination from "../Pagination/Pagination";


export default function Pokedex(props){
    const {pokemons, loading, page, setPage, totalPages} = props;
    console.log('pokemons',pokemons)

    const previusHandler = () =>{
        if(page > 0){
            setPage(page-1)
        }
    }
    const nextHandler = () =>{
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }


    return(
        <div>
            <div className="Pokedex-body">
                
                <div className="Pagination">
                    <Pagination
                        page={page+1}
                        totalPages={totalPages}
                        previus={previusHandler}
                        next={nextHandler}
                    />
                </div>
                <div className="Pokedex-col">
                    
                    {loading ? (
                    <div>loading...</div>
                    ) : (
                    
                    <div className="Pokedex-row">
                        {pokemons && pokemons.map((pokemon, index)=>{
                            return(
                                <div className="Pokedex-card-row">
                                    <div className="Pokemon-card">
                                        <PokemonCard key={index} pokemon={pokemon}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    )}
                </div>
                <Pagination
                        page={page+1}
                        totalPages={totalPages}
                        previus={previusHandler}
                        next={nextHandler}
                    />
            </div>
        </div>
    );
};