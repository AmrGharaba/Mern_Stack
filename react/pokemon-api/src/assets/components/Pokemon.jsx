import React, { useState } from "react";


const Pokemon = props => {
    const [arr, setArr] = useState([]);



    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            }).then(response => {
                setArr(response.results);
                console.log(arr);
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
    }


    return (
        <>
            <button onClick={() => getPokemon()}>
                click me!
            </button>

            <ul>
                {arr.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>




        </>
    )


}
export default Pokemon