// ./lib/Data.ts
export type Sale = {
  year: number;
  month: string;
  sales: number;
  region: 'North' | 'South' | 'East' | 'West';
  productCategory: 'Electronics' | 'Apparel' | 'Home Goods';
};
export type Region = 'North' | 'South' | 'East' | 'West' | 'all';
export type ProductCategory = 'Electronics' | 'Apparel' | 'Home Goods' | 'all';

export const salesData: Sale[] = [
  // 2022 Data
  { year: 2022, month: 'Jan', sales: 1200, region: 'North', productCategory: 'Electronics' },
  { year: 2022, month: 'Feb', sales: 1900, region: 'South', productCategory: 'Apparel' },
  { year: 2022, month: 'Mar', sales: 1500, region: 'East', productCategory: 'Home Goods' },
  { year: 2022, month: 'Apr', sales: 1800, region: 'West', productCategory: 'Electronics' },
  { year: 2022, month: 'May', sales: 2100, region: 'North', productCategory: 'Apparel' },
  { year: 2022, month: 'Jun', sales: 2300, region: 'South', productCategory: 'Home Goods' },
  { year: 2022, month: 'Jul', sales: 2500, region: 'East', productCategory: 'Electronics' },
  { year: 2022, month: 'Aug', sales: 2200, region: 'West', productCategory: 'Apparel' },
  { year: 2022, month: 'Sep', sales: 2800, region: 'North', productCategory: 'Home Goods' },
  { year: 2022, month: 'Oct', sales: 3100, region: 'South', productCategory: 'Electronics' },
  { year: 2022, month: 'Nov', sales: 3400, region: 'East', productCategory: 'Apparel' },
  { year: 2022, month: 'Dec', sales: 3700, region: 'West', productCategory: 'Home Goods' },

  // 2023 Data
  { year: 2023, month: 'Jan', sales: 2400, region: 'North', productCategory: 'Electronics' },
  { year: 2023, month: 'Feb', sales: 2210, region: 'South', productCategory: 'Apparel' },
  { year: 2023, month: 'Mar', sales: 2900, region: 'East', productCategory: 'Home Goods' },
  { year: 2023, month: 'Apr', sales: 2750, region: 'West', productCategory: 'Electronics' },
  { year: 2023, month: 'May', sales: 3100, region: 'North', productCategory: 'Apparel' },
  { year: 2023, month: 'Jun', sales: 3300, region: 'South', productCategory: 'Home Goods' },
  { year: 2023, month: 'Jul', sales: 3500, region: 'East', productCategory: 'Electronics' },
  { year: 2023, month: 'Aug', sales: 3200, region: 'West', productCategory: 'Apparel' },
  { year: 2023, month: 'Sep', sales: 3800, region: 'North', productCategory: 'Home Goods' },
  { year: 2023, month: 'Oct', sales: 4100, region: 'South', productCategory: 'Electronics' },
  { year: 2023, month: 'Nov', sales: 4400, region: 'East', productCategory: 'Apparel' },
  { year: 2023, month: 'Dec', sales: 4700, region: 'West', productCategory: 'Home Goods' },

  // 2024 Data
  { year: 2024, month: 'Jan', sales: 3500, region: 'North', productCategory: 'Electronics' },
  { year: 2024, month: 'Feb', sales: 4100, region: 'South', productCategory: 'Apparel' },
  { year: 2024, month: 'Mar', sales: 3800, region: 'East', productCategory: 'Home Goods' },
  { year: 2024, month: 'Apr', sales: 4200, region: 'West', productCategory: 'Electronics' },
  { year: 2024, month: 'May', sales: 4500, region: 'North', productCategory: 'Apparel' },
  { year: 2024, month: 'Jun', sales: 4800, region: 'South', productCategory: 'Home Goods' },
  { year: 2024, month: 'Jul', sales: 5000, region: 'East', productCategory: 'Electronics' },
  { year: 2024, month: 'Aug', sales: 4700, region: 'West', productCategory: 'Apparel' },
  { year: 2024, month: 'Sep', sales: 5300, region: 'North', productCategory: 'Home Goods' },
  { year: 2024, month: 'Oct', sales: 5600, region: 'South', productCategory: 'Electronics' },
  { year: 2024, month: 'Nov', sales: 5900, region: 'East', productCategory: 'Apparel' },
  { year: 2024, month: 'Dec', sales: 6200, region: 'West', productCategory: 'Home Goods' },
];

export const regions: Exclude<Region, 'all'>[] = ['North', 'South', 'East', 'West'];
export const productCategories: Exclude<ProductCategory, 'all'>[] = ['Electronics', 'Apparel', 'Home Goods'];