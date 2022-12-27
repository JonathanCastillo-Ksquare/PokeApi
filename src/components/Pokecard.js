import React from 'react'
import useFetchPokeData from '../hooks/useFetchPokeData'

export const Pokecard = ({ pokeUrl }) => {
    const [name, order, imgUrl, types] = useFetchPokeData(pokeUrl);

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