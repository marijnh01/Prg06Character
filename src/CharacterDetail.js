import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export function CharacterDetail() {

    const URI_COLLECTION = "http://localhost:8000/"

    const params = useParams()

    const [character, setCharacters] = useState(null)

//Load JSON
    function loadCharacter() {
        fetch(URI_COLLECTION + params.id, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setCharacters(result))
            .catch(error => console.log("ERROR") + error)
    }
    useEffect( () => {loadCharacter()}, [])

    return <section>
        <h1>{character && character.title}</h1>
        <p>{character && character.body}</p>
        <p>{character && character.author}</p>
    </section>
}