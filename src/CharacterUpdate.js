import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export function CharacterUpdate(props) {

    const URI_COLLECTION = "http://localhost:8000/"

    const params = useParams()

    const [character, setCharacters] = useState({
        title: "",
        body: "",
        author: ""
    })

    const loadCharacter = () => {
        fetch(URI_COLLECTION + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((result) => setCharacters(result))
        .catch(error => console.log("ERROR" + error))
    }

    useEffect( () => {loadCharacter()}, [])

    const onChangeHandler = (event) => {
        setCharacters({
            ...character,
            [event.target.name]: event.target.value
        })
    }

    const updateCharacter = (event) => {
        event.preventDefault()
        fetch(URI_COLLECTION + params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        .then((response) => response.json())
        .then((result) => setCharacters(result))
        .catch(error => console.log("ERROR" + error))
        .then((response) => props.charactersRefreshHandler())
        console.log("UPDATE")
    }


   return <section>
       <h1>Update</h1>

       <label>Title</label>
       <input type="text" name="title" value={character && character.title} onChange={onChangeHandler}/>

       <label>Body</label>
       <input type="text" name="Body" value={character && character.memory} onChange={onChangeHandler} />

       <label>Author</label>
       <input type="text" name="Author" value={character && character.points} onChange={onChangeHandler}/>

        <button onClick={updateCharacter}>Update Character</button>
   </section>
  }