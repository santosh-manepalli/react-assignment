import { useReactTable, PaginationState, flexRender, SortingState, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table";
import { columns } from "../features/users/table/userTableConfig";
import { User } from "../utils/types";
import React from "react";


type Props = {
    users: User[];
};

const UserTable = ({ users }: Props) => {
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data: users,
        columns,
        getCoreRowModel: getCoreRowModel(),
        //onSortingChange: setSorting, 
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        }
    });

    return (
        <div className="flex flex-col h-screen max-w-3xl mx-auto py-24">
            <table className="border">
                <thead>
                    {table.getHeaderGroups().map((hg) => (
                        <tr key={hg.id} className="border-b text-gray-800 uppercase">
                            {hg.headers.map((header) => (
                                <th key={header.id} className="px-4 pr-2 py-4 font-medium text-left">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {{
                                        asc: <span className="pl-2">↑</span>,
                                        desc: <span className="pl-2">↓</span>,
                                    }[header.column.getIsSorted() as string] ?? null}
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

            {/* Pagination */}
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    className="py-2 px-4 cursor-pointer"
                >
                    {'<<'}
                </button>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="py-2 px-4 cursor-pointer"
                >
                    {'<'}
                </button>
                <span className="my-0 mx-2">
                    Page{' '}
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="py-2 px-4 cursor-pointer"
                >
                    {'>'}
                </button>
                <button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    className="py-2 px-4 cursor-pointer"
                >
                    {'>>'}
                </button>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="ml-4 p-1"
                >
                    {[10, 20, 30, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default UserTable;

