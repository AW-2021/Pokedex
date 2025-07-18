import { type Pokemon } from "../types";

interface TableProps {
  pokemon: Pokemon | null;
}

const Table = ({ pokemon }: TableProps) => {
  const tableDataStyle: string = "border-2 border-gray-900 text-[min(2vw,1rem)] p-1 md:p-2 lg:py-4 lg:px-3";

  return (
    <table className="w-[90%] text-center text-gray-900">
      <tbody>
        <tr>
          <th className={tableDataStyle}>BASE</th>
          <th className={tableDataStyle}>STATS</th>
        </tr>

        {pokemon?.stats.map((pokeStat, index) => (
          <tr key={index}>
            <td
              className={`${tableDataStyle} w-3/5 ${
                pokeStat.stat.name === "hp" ? "uppercase" : "capitalize"
              }`}
            >
              {pokeStat.stat.name.replace(/-/g, " ")}
            </td>
            <td className={`${tableDataStyle} w-2/5`} id={pokeStat.stat.name}>
              {pokeStat.base_stat}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
