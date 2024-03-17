import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-primary">
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">Ticket Support System</Link>
            <div class="nav">
            </div>
        </nav>
    )
}
export default Nav;