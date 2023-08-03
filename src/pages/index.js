import Nav from '@/components/nav';
import ProductCard from '@/components/productCard';
import { CATEGORIES } from '@/constants';
import { Button } from 'antd';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  console.log(products);
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto">
      <section className="grid grid-cols-4 gap-3">
        {products.map(pd => (
          <ProductCard product={pd} />
        ))}
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-center mt-20">Featured Category</h3>
        <p className="text-md text-gray-600 text-center mb-5">
          Get Your Desired Product from Featured Category!
        </p>
        <div className="grid grid-cols-6 gap-3 my-5">
          {Object.entries(CATEGORIES).map(([key, value]) => (
            <div
              onClick={() => router.push(`categories/${value}`)}
              className="bg-purple-600 shadow-lg border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
            >
              <p className="text-xl capitalize text-white">{value.replace(/-/g, ' ')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
