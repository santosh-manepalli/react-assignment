import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        // <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <nav className="flex flex-col p-[20px] gap-[20px]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/table">User Table</NavLink>
        </nav>
    );
}

export default Navbar;