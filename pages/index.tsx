import styles from "../styles/Home.module.css";

import { GetStaticProps } from "next";
import { wrapper } from "../app/store";
import { setProducts } from "../features/Product/productSlice";
import { Product } from "../features/Product/productSlice";

import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import Layout from "../components/Layout/Layout";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const products: Product[] = await res.json();

    store.dispatch(setProducts(products));

    return {
      props: {
        products,
      },
    };
  }
);

type HomeProps = {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <ProductsContainer products={products} />
      </div>
    </Layout>
  );
}
