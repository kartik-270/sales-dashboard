// ./components/molecules/ProductCategoryFilter.tsx
import { Button } from '@/components/atoms/Button';
import { productCategories } from '@/app/lib/Data';
import type { ProductCategory } from '@/app/lib/Data'; // Import ProductCategory type
interface ProductCategoryFilterProps {
  currentCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory) => void;
}

export const ProductCategoryFilter = ({ currentCategory, onSelectCategory }: ProductCategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-gray-700">Category:</span>
      <Button onClick={() => onSelectCategory('all')} variant={currentCategory === 'all' ? 'primary' : 'secondary'}>
        All
      </Button>
      {productCategories.map((category) => (
        <Button key={category} onClick={() => onSelectCategory(category)} variant={currentCategory === category ? 'primary' : 'secondary'}>
          {category}
        </Button>
      ))}
    </div>
  );
};