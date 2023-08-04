import ProductCard from '@/components/productCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function ProductByCategoryPage() {
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://pcbuilderserver-two.vercel.app/categories/${router.query.categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, [router.query.categoryName]);

  return (
    <>
      <h1>Product by category</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map(pd => (
          <ProductCard product={pd} />
        ))}
      </div>
    </>
  );
}

export default ProductByCategoryPage;

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://pcbuilderserver-two.vercel.app/products`);
//   const products = await res.json();

//   const paths = products.map(pd => ({
//     params: { categoryName: pd.category },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async context => {
//   console.log('------------------------------------');
//   console.log(context);
//   const { params } = context;
//   const res = await fetch(`https://pcbuilderserver-two.vercel.app/categories/${params.category}`);
//   const product = await res.json();

//   console.log('---------->', product);

//   return {
//     props: {
//       product,
//     },
//   };
// };
