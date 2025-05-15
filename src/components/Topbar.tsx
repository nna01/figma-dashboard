import { FiMoon , FiChevronDown, FiSearch } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-sm">
      {/* Left: Page Title */}

      <div className="flex items-center gap-10">
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        <h1 className="text-lg text-gray-200">Advanced Quarry</h1>
        <h1 className="text-lg text-gray-200">Events</h1>

        <FiSearch className="text-xl text-gray-200 ursor-pointer hover:text-purple-600 transition" />

      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-8">

        {/* User Avatar & Name */}
        <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">
            Bessie Cooper
          </span>
          <img
            src="https://i.pravatar.cc/32"
            alt="User avatar"
            className="w-8 h-8 rounded-xl object-cover"
          />
          
          <FiChevronDown className="text-gray-400 text-sm" />

          <FiMoon  className="text-gray-500 text-xl cursor-pointer hover:text-purple-600 transition" />
        </div>
      </div>
    </div>
  );
}
