import { Product } from "@/types";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <div>{title}</div>
    </div>
  );
};

export default ProductList;
