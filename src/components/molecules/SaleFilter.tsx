// components/molecules/SalesFilter.tsx
import { Input } from '@/components/atoms/Input';

interface SalesFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const SalesFilter = ({ value, onChange }: SalesFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="threshold" className="font-semibold text-gray-700">
        Sales above:
      </label>
      <Input
        id="threshold"
        type="number"
        placeholder="e.g., 2000"
        value={value === 0 ? '' : value} // Show placeholder if value is 0
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-32"
      />
    </div>
  );
};