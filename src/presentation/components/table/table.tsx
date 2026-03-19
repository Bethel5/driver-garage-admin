import type { TableProps } from "./table.types";

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
  return (
    <table className="w-full border-collapse bg-white shadow-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className="border p-2 text-left">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={String(col.key)} className="border p-2">
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;