const Home = () => {
    // const [error, submitAction, isPending] = useActionState(() => { })
    const options = [{ value: "admin", label: "Admin" }, { value: "manager", label: "Manager" }, { value: "user", label: "User" }];

    return (
        <form className="flex flex-col">
            <label htmlFor="text">Text Box</label>
            <input type="text" id="text" className="border-2 border-solid" />

            <label htmlFor="number">Number</label>
            <input type="number" id="number" className="border-2 border-solid" />

            <label htmlFor="user-select">Select</label>
            <select id="user-select" className="border-2 border-solid">
                {/* <option value={""} disabled>-- Select an option --</option> */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <label>
                Active User
                <input type="checkbox" checked onChange={() => { }} />
            </label>
        </form>
    )

};

export default Home;