export default function Page() {
  return (
    <div className="bg-white rounded p-6">
      <div className="grid grid-cols-[1fr_auto] gap-48 mb-10">
        <div>
          <h3 className="text-lg mb-3 font-medium">My availability</h3>
          <p className="text-sm text-slate-600 leading-6">
            {`
         Set your availability dates and times by clicking the "Set your availability" button on the right. Below you can see the set dates and times broken down by type of service.`}
          </p>
        </div>
        <div>
          <button className="bg-blue-600 text-md text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium">
            Set your availability
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">
              Mentorship
            </h4>
            <p className="text-xs text-slate-600">
              This has to do with providing a guidance fro aspiring young
              individuals
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
        </div>
        <div className="px-6 py-4 border grid grid-cols-[1fr_auto_auto] gap-3 justify-between items-center rounded-md">
          <div>
            <h4 className="text-sm font-medium text-stone-900 mb-1">
              IT Consultancy
            </h4>
            <p className="text-xs text-slate-600">
              This has to do with anything around CTO-as-a-Service, IT
              consultancy service
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Free</span>
            <span className="text-slate-600 text-sm">/ 30m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
