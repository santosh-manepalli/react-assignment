import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table";
import { data } from "../features/users/data/data";
import { columns } from "../features/users/table/userTableConfig";

// type User = {
//     id: number
//     name: string
//     age: number
//     role: string
//     isActive: boolean
//     joiningDate: string
// }

// const columnHelper = createColumnHelper<User>();

// const columns = [
//     columnHelper.accessor('id', {
//         cell: (info) => info.getValue()
//     }),
// ]

const UserTable = () => {
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto py-24">
            <table className="border">
                <thead>
                    {table.getHeaderGroups().map((hg) => (
                        <tr key={hg.id} className="border-b text-gray-800 uppercase">
                            {hg.headers.map((header) => (
                                <th key={header.id} className="px-4 pr-2 py-4 font-medium text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="border-b">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;

