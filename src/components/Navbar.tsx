import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="p-[20px] gap-[20px] left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 fixed">
            <NavLink to="/" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Home</NavLink>
            <NavLink to="/table" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">User Table</NavLink>
        </nav>
    );
}

export default Navbar;