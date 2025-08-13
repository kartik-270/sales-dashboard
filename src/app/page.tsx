// app/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { SalesChart } from '@/components/organisms/SalesChart';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card'; 
import { ChartTypeSelector } from '@/components/molecules/ChartType'; 
import { SalesFilter } from '@/components/molecules/SaleFilter'; 
import { salesData } from './lib/Data';

type ChartType = 'bar' | 'line' | 'pie';

export default function DashboardPage() {
  const [year, setYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number>(0);

  const filteredData = useMemo(() => {
    return salesData.filter(
      (sale) => sale.year === year && sale.sales >= salesThreshold
    );
  }, [year, salesThreshold]);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Sales Dashboard</h1>

        {/* Controls Section using our Card and Molecules */}
        <Card className="mb-8">
          <div className="flex flex-wrap gap-6 items-center">
            {/* Year Selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Year:</span>
              {[2022, 2023, 2024].map((y) => (
                <Button key={y} onClick={() => setYear(y)} variant={year === y ? 'primary' : 'secondary'}>
                  {y}
                </Button>
              ))}
            </div>

            {/* Use the new molecules */}
            <ChartTypeSelector currentType={chartType} onSelectType={setChartType} />
            <SalesFilter value={salesThreshold} onChange={setSalesThreshold} />
          </div>
        </Card>

        {/* Chart Display using our Card */}
        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart for {year}
          </h2>
          {filteredData.length > 0 ? (
            <SalesChart data={filteredData} chartType={chartType} />
          ) : (
            <p className="text-center text-gray-500 py-20">No data available for the selected filters.</p>
          )}
        </Card>
      </div>
    </main>
  );
}