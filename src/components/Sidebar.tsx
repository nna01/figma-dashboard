import { FaBitcoin, FaAirbnb } from "react-icons/fa";
import { SiIntercom } from "react-icons/si";

import {
  FiMenu,
  FiPieChart,
  FiClock,
  FiGlobe,
  FiSun,
  FiMessageSquare,
} from "react-icons/fi";

import { TbCommand } from "react-icons/tb"; // ⌘ icon

export default function Sidebar() {
  return (
    <aside className="w-16 md:w-20 min-h-screen bg-white border-r border-gray-200 shadow-md flex flex-col items-center py-6 shrink-0">
      {/* Hamburger icon */}
      <FiMenu className="text-2xl text-gray-500 hover:text-purple-600 transition-all duration-200 transform hover:scale-110 cursor-pointer mb-8" />

      {/* Main navigation section */}
      <div className="flex flex-col items-center gap-4">
        {/* App shortcut icons */}
        {[
          { Icon: FaBitcoin, bg: "bg-orange-400 hover:bg-orange-500" },
          { Icon: SiIntercom, bg: "bg-blue-500 hover:bg-blue-600" },
          { Icon: FaAirbnb, bg: "bg-rose-400 hover:bg-rose-500" },
        ].map(({ Icon, bg }, i) => (
          <div
            key={i}
            className={`w-10 h-10 md:w-12 md:h-12 ${bg} rounded-xl flex items-center justify-center`}
          >
            <Icon className="text-white text-xl md:text-2xl" />
          </div>
        ))}

        {/* Sub menu pill section */}
        <div className="bg-gray-100 rounded-3xl py-4 flex flex-col items-center gap-6 mt-4">
          <div className="bg-white shadow-md p-3 rounded-2xl">
            <TbCommand className="text-purple-600 text-xl" />
          </div>
          {[FiPieChart, FiClock, FiGlobe, FiSun].map((Icon, i) => (
            <div
              key={i}
              className="hover:bg-white hover:shadow-md p-2 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <Icon className="text-gray-400 text-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom message icon */}
      <div className="bg-gray-100 rounded-xl p-2 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer mt-6">
        <FiMessageSquare className="text-purple-500 text-xl" />
      </div>
    </aside>
  );
}
