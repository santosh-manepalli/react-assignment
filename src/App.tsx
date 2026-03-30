import Home from "./pages/Home";
import UserTable from "./pages/UserTable";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { data as initialData } from "../src/features/users/data/data";
import { useReducer } from "react";
import { usersReducer } from "./features/users/reducer/usersReducer";
import { User } from "./utils/types";

const App = () => {
    const [users, dispatch] = useReducer(usersReducer, initialData);

    const addUser = (user: User) => {
        dispatch({ type: "ADD_USER", payload: user });
    }

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home addUser={addUser} users={users} />} />
                <Route path="/table" element={<UserTable users={users} />} />
            </Routes>
        </>

    )
}

export default App;