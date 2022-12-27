import { useEffect, useState } from "react";

const useFetchPokeData = (pokeUrl) => {
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

    return [name, order, imgUrl, types]
}

export default useFetchPokeData;