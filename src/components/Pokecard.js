import React from 'react'
import { useState, useEffect } from 'react'

export const Pokecard = ({ pokeUrl }) => {
    const [name, setName] = useState('');
    const [order, setOrder] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [types, setTypes] = useState([]);
    useEffect(() => {
        const fetchPokeData = async () => {
            const req = await fetch(pokeUrl);
            const res = await req.json();

            setName(res.name)
            setOrder(res.order)
            setImgUrl(res.sprites.front_shiny)
            setTypes(res.types)
        }

        if (pokeUrl) {
            fetchPokeData();
        }


    }, [pokeUrl])

    const list = types.map((value) => <li key={value.type.name}>{value.type.name}</li>)

    return (
        <div>
            <h3>
                {order} - {name}
            </h3>
            <h5>
                <ol>
                    {list}
                </ol>
            </h5>
            <figure>
                {imgUrl && (<img src={imgUrl} alt={name} />)}
            </figure>

        </div>
    )
}

export default Pokecard