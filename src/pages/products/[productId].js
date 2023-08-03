export default function ProductDetailsPage({ product }) {
  const { image, name, price, category, status, description, review, features } = product;

  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div className="w-full">
        <img className="w-full" src={image} />
      </div>
      <div>
        <p>{name}</p>
        <p>{category}</p>
        <p>{price}</p>
        <p>{status}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();

  const paths = products.map(pd => ({
    params: { productId: pd._id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async context => {
  console.log('------------------------------------');
  console.log(context);
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
