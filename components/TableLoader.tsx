type Props = {
  rows?: number;
  columns?: number;
};

export default function TableLoader({ columns = 5, rows = 4 }: Props) {
  const dataRows = Array.from({ length: rows }, (_, i) => i);
  const dataCols = Array.from({ length: columns }, (_, i) => i);
  return (
    <div className="table-container">
      Loading..
      {/* <table className="table">
        <thead className="table-head">
          <tr>
            {dataCols.map((row) => (
              <th className="th" key={row}></th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {dataRows.map((row) => (
            <tr key={row}>
              {dataCols.map((col) => (
                <td className="table-data" key={col}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
