import useSwr from "swr";
import ProductItem from "../../facilities-item";
import ProductsLoading from "./loading";
import products from "../../../utils/data/facilities";

const ProductsContent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { error } = useSwr("/api/facilities", fetcher);
  const data = products;

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="products-list">
          {data.map((item) => (
            <ProductItem
              discount={item.discount}
              key={item.id}
              id={item.id}
              productImage={item.images[0]}
              name={item.name}
              tag={item.tag}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
