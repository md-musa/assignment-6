import { PcBuilderContext } from '@/pages/_app';
import { Avatar, Button, Card } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [components, setComponents] = useContext(PcBuilderContext);
  const router = useRouter();

  const addToPcBuilder = product => {
    const isExist = components.filter(pd => pd.category == product.category);
    if (isExist.length) {
      alert('Item already exist');
      return;
    }

    setComponents([...components, product]);
    router.push('/pcBuilder');
  };
  return (
    <div className="p-2 border-2 border-gray-200 shadow-md rounded-md">
      <Link href={`/products/${product._id}`}>
        <div className="h-52 rounded-md overflow-hidden">
          <img className="h-full w-full" src={product.image} />
        </div>
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.status}</p>
      </Link>
      <Button onClick={() => addToPcBuilder(product)} type="primary">
        Add to Builder
      </Button>
    </div>
  );
};
export default ProductCard;
