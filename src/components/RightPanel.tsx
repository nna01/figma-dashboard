import { FiInfo, FiLink } from "react-icons/fi";

export default function RightPanel() {
  return (
    <div className="bg-[#f9f9fc] rounded-cl p-6 shadow flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold text-gray-700">Superiority</h2>
        <FiInfo className="text-gray-400 text-sm" />
      </div>

      <div className="w-[180px] rounded-xl shadow-md">
        <img
          src="images/superiority-img.png" // or your actual path
          alt="img"
          className="w-full h-auto object-contain rounded-xl shadow"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-purple-500 cursor-pointer hover:underline">
        <FiLink className="text-sm" />
        <span>Social Trading Platform</span>
      </div>

      <div className="w-[180px] rounded-xl shadow-md">
        <div className="flex flex-col gap-4">
          {[
            { name: "Google", image: "/images/google.png" },
            { name: "Foursquare", image: "/images/foursquare.png" },
            { name: "Kickstarter", image: "/images/kickstarter.png" },
            { name: "Talk", image: "/images/talk.png" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {/* Logo block */}
              <div className="w-auto h-auto rounded-xl flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Text block */}
              <div className="flex flex-col text-xs leading-tight">
                <span className="text-gray-400">Stock trading</span>
                <span className="text-gray-800 font-semibold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <h2 className="text-sm font-semibold text-gray-700">Income</h2>
        <FiInfo className="text-gray-400 text-sm" />
      </div>

      <div className="w-[180px] rounded-xl shadow-md">
        {/* Donut ring */}
        <div className="w-12 h-12 relative">
          {/* Background ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

          {/* Foreground ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-purple-500"
            style={{ clipPath: "inset(0 50% 0 0)" }} // half-filled style
          ></div>

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-purple-600">
            46%
          </div>
        </div>
      </div>
    </div>
  );
}
