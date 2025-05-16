export default function LineChartCard() {
    return (
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-800">Total Visitors</h2>
          <span className="text-xs text-gray-500">Monthly</span>
        </div>
  
        {/* Chart area placeholder */}
        <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
          Line Chart Placeholder
        </div>
      </div>
    );
  }
  