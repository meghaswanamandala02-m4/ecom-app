import { Link } from "react-router-dom";

function Master(){
    return(
<>
<Link to="/header">Header</Link>
<Link to="/footer">Footer</Link>
<Link to="/stalestate">StaleState</Link>
<Link to="/cart">Cart</Link>
<Link to="/products">Products</Link>
<Link to="/admin">Admin</Link>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>
<Link to="/">Home</Link>

</>
    )
}
export default Master;