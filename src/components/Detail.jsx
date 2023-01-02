import React, { useState, useEffect } from "react";
import Styles from "../styles/Detail.module.css"
import { useParams } from "react-router-dom";

export default function Detail() {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div className={Styles.detail}>
            <div className={Styles.txt}>
                <h1>{character.name}</h1>
                <h3>{character.status}</h3>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
            </div>
            <img className={Styles.imgD} src={character.image} alt={character.name} />
        </div>
    )
}
// - Name
// - Status
// - Specie
// - Gender
// - Origin
// - Image
