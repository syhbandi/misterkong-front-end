import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  OnChangeFn,
} from "@tanstack/react-table";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { TableRowSkeleton } from "./Skeletons";

type Props<TData> = {
  data: TData[];
  columns: ColumnDef<TData, string>[];
  isLoading: boolean;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
};

const Table = <TData extends Object>({
  data,
  columns,
  isLoading,
  sorting,
  setSorting,
}: Props<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
  });

  return (
    <div className="overflow-x-auto scrollbar-custom">
      <table className="w-full border-b border-x border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-y border-gray-300 p-3 uppercase text-left"
                >
                  <div
                    {...{
                      className: `${
                        header.column.getCanSort() ? "cursor-pointer" : ""
                      } select-none relative flex items-center gap-1`,
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <MdOutlineKeyboardArrowUp className="text-xl" />,
                      desc: <MdOutlineKeyboardArrowDown className="text-xl" />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <>
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
              <TableRowSkeleton
                colCount={table.getHeaderGroups()[0].headers.length}
              />
            </>
          ) : table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-200 even:bg-gray-100 odd:bg-white"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="p-3 text-center"
                colSpan={table.getHeaderGroups()[0].headers.length}
              >
                Tidak menemukan data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
