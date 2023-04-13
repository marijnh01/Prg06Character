import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export function Layout() {
    return <div>

        <header>
            <h1>Characters</h1>
        </header>

        <nav>
            <ul>
                <li> <Link to="/">All Characters</Link> </li>
                <li> <Link to="create">New Character</Link> </li>
            </ul>
        </nav>

        <div>
            <Outlet />
        </div>

    </div>
}