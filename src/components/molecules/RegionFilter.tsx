// ./components/molecules/RegionFilter.tsx
import { Button } from '@/components/atoms/Button';
import { regions } from '@/app/lib/Data';
import type { Region } from '@/app/lib/Data'; // Import Region type
interface RegionFilterProps {
  currentRegion: Region| 'all';
  onSelectRegion: (region:Region ) => void;
}

export const RegionFilter = ({ currentRegion, onSelectRegion }: RegionFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-gray-700">Region:</span>
      <Button onClick={() => onSelectRegion('all')} variant={currentRegion === 'all' ? 'primary' : 'secondary'}>
        All
      </Button>
      {regions.map((region) => (
        <Button key={region} onClick={() => onSelectRegion(region)} variant={currentRegion === region ? 'primary' : 'secondary'}>
          {region}
        </Button>
      ))}
    </div>
  );
};