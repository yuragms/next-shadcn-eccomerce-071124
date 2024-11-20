import ProductCarousel from '@/components/shared/product/product-carousel';
import ProductList from '@/components/shared/product/product-list';
import {
  getFeaturedProducts,
  getLatestProducts,
} from '@/lib/actions/product.actions';
// import sampleData from '@/lib/sample-data';

export default async function Home() {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <div className="space-y-8">
        {/* <h2 className="h2-bold">Latest Products</h2> */}
        {/* <ProductList data={sampleData.products} /> */}
        <ProductList title="Newest Arrivals" data={latestProducts} />
      </div>
    </div>
  );
}
