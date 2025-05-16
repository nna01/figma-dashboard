export default function ActivePercentageCard() {
    return (
      <div className="bg-white rounded-xl p-6 shadow flex flex-col w-full">
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800">Active Percentage</h2>
  
        {/* Big Number */}
        <div className="text-3xl font-bold text-purple-600">70%</div>
  
        {/* Activity bar (visual) */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 w-[70%]"></div>
        </div>
  
        {/* Labels */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>Active</span>
          <span>Inactive</span>
        </div>
      </div>
    );
  }
  