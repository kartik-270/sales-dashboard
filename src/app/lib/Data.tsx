export type Sale = {
  year: number;
  month: string;
  sales: number;
};

export const salesData: Sale[] = [
  // 2022 Data
  { year: 2022, month: 'Jan', sales: 1200 },
  { year: 2022, month: 'Feb', sales: 1900 },
  { year: 2022, month: 'Mar', sales: 1500 },

  // 2023 Data
  { year: 2023, month: 'Jan', sales: 2400 },
  { year: 2023, month: 'Feb', sales: 2210 },
  { year: 2023, month: 'Mar', sales: 2900 },

  // 2024 Data
  { year: 2024, month: 'Jan', sales: 3500 },
  { year: 2024, month: 'Feb', sales: 4100 },
  { year: 2024, month: 'Mar', sales: 3800 },
  
];