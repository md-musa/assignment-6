import { CATEGORIES } from '@/constants';
import { Button } from 'antd';
import Link from 'next/link';
import { useContext } from 'react';
import { PcBuilderContext } from './_app';
import toast from 'react-hot-toast';

function PcBuilderPage() {
  const [components, setComponents] = useContext(PcBuilderContext);

  const handleCompleteBuild = () => {
    if (!components.length) {
      toast.error('No component added yet!');
      return;
    }
    toast.success('Successfully build your PC');
    setComponents([]);
  };

  const x = Object.entries(CATEGORIES).map(([key, value]) => {
    const item = components.filter(pd => pd.category == value);
    return (
      <div key={item._id}>
        <div className="flex justify-between my-3 items-center rounded-md shadow-md bg-slate-400 px-7">
          <p className="text-xl text-white capitalize">{value.replace(/-/g, ' ')}</p>
          {!item.length && (
            <Link href={`/categories/${value}`}>
              <Button type="primary">Choose</Button>
            </Link>
          )}
        </div>

        {item.length && (
          <div className="flex h-32 ml-6 !border-2 border-gray-700 shadow-lg rounded-md">
            <img className="h-full" src={item[0].image} />
            <div className="px-5">
              <p>{item[0].name}</p>
              <p>Price: {item[0].price}</p>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="max-w-6xl mx-auto h-[150vh]">
      <h3>PC Builder</h3>

      <div className="grid grid-cols-[3fr_1fr]">
        <div>{x}</div>

        <div className="px-8 py-5">
          <p>Total components: {components.length}</p>
          <p>Total Price: {components.reduce((total, item) => item.price + total, 0)}</p>
          <Button onClick={handleCompleteBuild} className="w-full" type="primary">
            Complete Build
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PcBuilderPage;
