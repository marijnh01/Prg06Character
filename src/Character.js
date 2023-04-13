
import { useState } from 'react';
import { Link } from "react-router-dom"

export function Character(props) {
    console.log(props);

    const deleteCharacter = () =>{
        fetch(props.character._links.self.href, {
            method: 'DELETE' ,
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => props.charactersRefreshHandler())
    }


    return <section>
        <h2>{props.character.title}</h2>
        <Link to={"characters/" + props.character._id}>Read more...</Link>
        <Link to={"characters/" + props.character._id + "/update"}>Update</Link>
        <button onClick={deleteCharacter}>Delete</button>
    </section>;

}