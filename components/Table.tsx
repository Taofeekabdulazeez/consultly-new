export default function Table() {
  return (
    <div className="overflow-hidden rounded-lg w-full border border-stone-300">
      <table className="p-3 w-full text-left border-collapse overflow-x-scroll">
        <thead className="bg-slate-50">
          <tr className="">
            <th className="uppercase text-sm font-medium text-stone-800 p-3">
              Date
            </th>
            <th className="uppercase text-sm font-medium text-stone-800 p-3">
              Discription
            </th>
            <th className="uppercase text-sm font-medium text-stone-800 p-3">
              amount
            </th>
            <th className="uppercase text-sm font-medium text-stone-800 p-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white border-collapse">
          <tr className="">
            <td className="p-3 text-slate-500 text-sm">5/21/2024 - 6/4/2024</td>
            <td className="p-3 text-slate-500 text-sm">548628682-D6</td>
            <td className="p-3 text-slate-500 text-sm">$0.00</td>
            <td className="p-3 text-slate-500 text-sm"></td>
          </tr>
          {/* tr - 2 */}
          <tr>
            <td className="p-3 text-slate-500 text-sm">5/21/2024 - 6/4/2024</td>
            <td className="p-3 text-slate-500 text-sm">548628682-D6</td>
            <td className="p-3 text-slate-500 text-sm font-dium">$0.00</td>
            <td className="p-3 text-slate-500 text-sm font-dium"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
