import { useActionState } from "react";
import Home from "./pages/Home";
import UserTable from "./pages/UserTable";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        // <form action={submitAction}>
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/table" element={<UserTable />} />
            </Routes>
        </>

    )
}

export default App;