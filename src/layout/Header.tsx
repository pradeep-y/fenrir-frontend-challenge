export default function Header({ onMenuClick }: any) {
  return (
    <div className="bg-white px-4 md:px-10 py-4 border-b flex justify-between items-center">

      <button
        className="md:hidden text-xl"
        onClick={onMenuClick}
      >
        ☰
      </button>

      <div className="text-sm text-gray-500 hidden md:block">
        Scan / Private Assets / <span className="text-teal-600">New Scan</span>
      </div>

      <div className="hidden md:flex gap-3">
        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
          Export Report
        </button>
        <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-100">
          Stop Scan
        </button>
      </div>
    </div>
  );
}