import RightPanel from "./RightPanel";
import LineChartCard from "./LineChartCard";
import DonutCard from "./DonutCard";
import ActivePercentageCard from "./ActivePercentageCard";

export default function Main() {
  return (
    <main className="p-6 bg-[#f9f9fc] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 h-[calc(100vh-3rem)]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 overflow-hidden">
          <LineChartCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DonutCard />
            <ActivePercentageCard />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="overflow-y-auto max-h-[calc(100vh-3rem)] pr-1">
          <RightPanel />
        </div>
      </div>
    </main>
  );
}
