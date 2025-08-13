// components/molecules/ChartTypeSelector.tsx
import { Button } from '@/components/atoms/Button';

type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeSelectorProps {
  currentType: ChartType;
  onSelectType: (type: ChartType) => void;
}

export const ChartTypeSelector = ({ currentType, onSelectType }: ChartTypeSelectorProps) => {
  const chartTypes: ChartType[] = ['bar', 'line', 'pie'];

  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-gray-700">Chart Type:</span>
      {chartTypes.map((type) => (
        <Button
          key={type}
          onClick={() => onSelectType(type)}
          variant={currentType === type ? 'primary' : 'secondary'}
        >
          {/* Capitalize first letter */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  );
};