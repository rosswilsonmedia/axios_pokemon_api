import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styles from '../css/FetchPokemon.module.css';

const FetchPokemon = () => {
    const [pokemonList, setPokemonList]=useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response =>{setPokemonList(response.data.results)})
    }, [pokemonList]);

    const clickHandler = (e) => {
        setPokemonList('');
    }

    return (
        <div>
            <button
                onClick={clickHandler}
                className={styles.fetchBtn}
            >
                Fetch Pokemon
            </button>
            {
                pokemonList.length>0 && pokemonList.map((pokemon)=>{
                    return(
                        <p>{pokemon.name}</p>
                    )
                })
            }
        </div>
    )
}

export default FetchPokemon;