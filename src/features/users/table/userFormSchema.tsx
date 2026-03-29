export const userFormSchema = {
    fields: [
        {
            name: "name",
            label: "Full Name",
            type: "text",
            required: true,
            defaultValue: ""
        },
        {
            name: "age",
            label: "Age",
            type: "number",
            required: true
        },
        {
            name: "role",
            label: "Role",
            type: "select",
            options: ["Admin", "Manager", "User"]
        },
        {
            name: "isActive",
            label: "Active",
            type: "checkbox",
            defaultValue: true
        },
        {
            name: "joiningDate",
            label: "Joining Date",
            type: "date"
        }
    ]
};
