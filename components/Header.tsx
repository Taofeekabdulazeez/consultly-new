import { MdLogout, MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header className="p-4 flex justify-end items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50">
          <span className="text-xl font-bold">TA</span>
        </div>
        <p className="text-sm font-medium">Taofeek</p>
      </div>
      <button className="p-1.5 hover:bg-slate-50">
        <MdOutlineDarkMode size={24} className="text-blue-600" />
      </button>
      <button className="p-1.5 hover:bg-slate-50">
        <MdLogout size={24} className="text-blue-600" />
      </button>
    </header>
  );
}
