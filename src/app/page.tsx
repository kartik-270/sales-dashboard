// app/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { SalesChart } from '@/components/organisms/SalesChart';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { ChartTypeSelector } from '@/components/molecules/ChartType';
import { SalesFilter } from '@/components/molecules/SaleFilter';
import { RegionFilter } from '@/components/molecules/RegionFilter'; // New Import
import { ProductCategoryFilter } from '@/components/molecules/ProductCategoryFilter'; // New Import
import { salesData } from './lib/Data';

type ChartType = 'bar' | 'line' | 'pie';
type Region = 'North' | 'South' | 'East' | 'West' | 'all';
type ProductCategory = 'Electronics' | 'Apparel' | 'Home Goods' | 'all';
type onSelectCategory = (category: string) => void;
type onSelectRegion = (region: string) => void;

export default function DashboardPage() {
  const [year, setYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number>(0);
  const [region, setRegion] = useState<Region>('all'); // New State
  const [productCategory, setProductCategory] = useState<ProductCategory>('all'); // New State

  const filteredData = useMemo(() => {
    return salesData.filter((sale) => {
      const yearMatch = sale.year === year;
      const salesMatch = sale.sales >= salesThreshold;
      const regionMatch = region === 'all' || sale.region === region;
      const categoryMatch = productCategory === 'all' || sale.productCategory === productCategory;
      return yearMatch && salesMatch && regionMatch && categoryMatch;
    });
  }, [year, salesThreshold, region, productCategory]); // Add new dependencies

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Sales Dashboard</h1>

        <Card className="mb-8">
          <div className="flex flex-col gap-6">
            {/* --- Top Row of Filters --- */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Year Selector */}
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Year:</span>
                {[2022, 2023, 2024].map((y) => (
                  <Button key={y} onClick={() => setYear(y)} variant={year === y ? 'primary' : 'secondary'}>
                    {y}
                  </Button>
                ))}
              </div>
              <ChartTypeSelector currentType={chartType} onSelectType={setChartType} />
              <SalesFilter value={salesThreshold} onChange={setSalesThreshold} />
            </div>

            {/* --- Bottom Row of New Filters --- */}
            <div className="flex flex-wrap items-center gap-6 border-t border-gray-200 pt-6">
              <RegionFilter currentRegion={region} onSelectRegion={setRegion} />
              <ProductCategoryFilter currentCategory={productCategory} onSelectCategory={setProductCategory} />
            </div>
          </div>
        </Card>

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