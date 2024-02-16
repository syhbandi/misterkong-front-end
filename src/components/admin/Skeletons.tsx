const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const TableRowSkeleton = ({ colCount }: { colCount: number }) => {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <TableColSkeleton colCount={colCount} />
    </tr>
  );
};

const TableColSkeleton = ({ colCount }: { colCount: number }) => {
  const td = [];

  for (let i = 0; i < colCount; i++) {
    td.push(
      <td
        className={`${shimmer} relative overflow-hidden whitespace-nowrap px-3 py-3`}
        key={i}
      >
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
    );
  }

  return <>{td.map((data) => data)}</>;
};
