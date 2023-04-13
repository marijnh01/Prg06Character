import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Layout } from "./Layout"
import { Character } from "./Character";
import { NewCharacter } from "./NewCharacter";
import { Error } from "./Error";
import { CharacterDetail } from "./CharacterDetail";
import { CharacterUpdate } from "./CharacterUpdate";

const URI_COLLECTION = "http://localhost:8000/"

export function App() {
    const [character, setCharacters] = useState([]);

    //Load JSON
    const loadCharacters = () => {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setCharacters(result.items))
            .catch(error => console.log("ERROR") + error)
    }

    const showCharacters = character.map((value, key) =>
        <Character key={value.id} character={value} charactersRefreshHandler = {loadCharacters()}/>)


    useEffect( () => {loadCharacters()}, [])

    return <BrowserRouter>

        <Routes>

            <Route path='/' element={<Layout />}>
                <Route index element={showCharacters}></Route>
                <Route path="create" element={<NewCharacter charactersRefreshHandler = {loadCharacters()}/>}> </Route>
                <Route path="characters/:id" element={<CharacterDetail />}></Route>
                <Route path="characters/:id/update" element={<CharacterUpdate charactersRefreshHandler = {loadCharacters()}/>}></Route>
                <Route path="*" element={<Error />}></Route>
            </Route>
            {/* {showCharacters}
            <NewCharacter charactersRefreshHandler = {loadCharacters}/> */}

        </Routes>

    </BrowserRouter>
}