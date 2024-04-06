import {useState, useEffect} from 'react'


function animeapi(){

    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

    const GetTopAnime = async () => {

        const temp = await fetch(`https://api.jikan.moe/v4`).then(res => res.json());

        SetTopAnime(temp.top.slice(0, 5));
    }

    useEffect(() => {
        GetTopAnime();
    }, [])
}