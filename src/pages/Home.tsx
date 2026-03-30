import { useState } from "react";
import { User } from "../utils/types";
import { useNavigate } from "react-router-dom";

type Props = {
    addUser: (user: User) => void,
    users: User[]
}

const Home = ({ addUser, users }: Props) => {

    const [formData, setFormData] = useState<User>({
        id: 0,
        name: "",
        age: 0,
        role: "admin",
        isActive: false,
        joiningDate: ""
    });

    const generateNextId = (users: User[]): number => {
        return users.length
            ? Math.max(...users.map((u) => u.id)) + 1
            : 1;
    };

    const navigate = useNavigate();

    const options = [{ value: "admin", label: "Admin" }, { value: "manager", label: "Manager" }, { value: "user", label: "User" }];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target;
        setFormData((prev) => ({
            ...prev,
            [target.name]:
                target.type === "checkbox"
                    ? (target as HTMLInputElement).checked
                    : target.type === "number" ? Number(target.value) : target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validations
        if (!formData.name.trim()) {
            alert("Name is required");
            return;
        }

        if (!formData.age) {
            alert("Age is required");
            return;
        }

        if (!formData.role.trim()) {
            alert("Role is required");
            return;
        }

        const newUser: User = {
            ...formData,
            id: generateNextId(users),
            age: Number(formData.age),
            joiningDate: new Date().toISOString().split("T")[0]
        }

        addUser(newUser);

        // Reset form
        setFormData({
            id: 0,
            name: "",
            age: 0,
            role: "admin",
            isActive: false,
            joiningDate: ""
        });

        //Switch to table tab
        navigate("/table");
    }

    return (
        <form className="pt-24 flex justify-center" onSubmit={handleSubmit}>

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6">

                <div className="flex flex-col">
                    <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="text" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="age" className="mb-2 text-sm font-medium text-gray-700">Age</label>
                    <input type="number" id="age" name="age" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="user-select" className="mb-2 text-sm font-medium text-gray-700">Select Role</label>
                    <select id="user-select" name="role" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}>
                        {/* <option value={""} disabled>-- Select an option --</option> */}
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-700">
                        Active User
                    </label>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
                    Submit
                </button>
            </div>
        </form>
    )

};

export default Home;