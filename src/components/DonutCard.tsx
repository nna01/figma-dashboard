export default function DonutCard() {
    return (
      <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center text-center w-full">
        {/* Donut circle (placeholder) */}
        <div className="relative w-24 h-24">
          {/* Background ring */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
  
          {/* Foreground ring */}
          <div
            className="absolute inset-0 rounded-full border-8 border-purple-500"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          ></div>
  
          {/* Center value */}
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-purple-600">
            220M+
          </div>
        </div>
  
        {/* Label */}
        <p className="text-xs font-medium text-gray-500">Perpetual Visitors</p>
      </div>
    );
  }
  