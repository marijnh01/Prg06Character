import {useState} from "react";

const URI_COLLECTION = "http://localhost:8000/"

export function NewCharacter(props) {
    console.log(props);

    const [character, setCharacter] = useState({
        title: "",
        body: "",
        author: ""
    })

    const saveCharacter = () => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
            
        })
            .then((response) => props.charactersRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>New Note</h2>
        <form>
            <input type="text" value={character.title} name="title" onChange={onChangeHandler}/><br></br>
            <input type="text" value={character.body} name="body" onChange={onChangeHandler}/><br></br>
            <input type="text" value={character.author} name="author" onChange={onChangeHandler}/><br></br>

            <button onClick={saveCharacter}>Save</button>
        </form>

    </section>
}
