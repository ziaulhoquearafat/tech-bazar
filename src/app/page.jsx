import FeaturedProducts from "@/components/FeaturesProducts";

export default async function Home() {
  // Backend থেকে product fetch
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="font-sans">
      {/* 1. HERO */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Tech Bazar
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the latest gadgets at unbeatable prices.
          </p>
          <a
            href="/products"
            className="btn btn-primary bg-white text-blue-600 border-none px-6"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS */}
      <FeaturedProducts products={products.slice(0, 3)} />

      {/* 3. FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Choose Tech Bazar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">High Quality</h3>
              <p>We only sell products that meet strict quality standards.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
              <p>Get your orders delivered quickly and safely.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="font-bold text-xl mb-2">Best Support</h3>
              <p>Our customer support team is always ready to help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORIES */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-50 rounded shadow">Monitors</div>
            <div className="p-6 bg-green-50 rounded shadow">Keyboards</div>
            <div className="p-6 bg-yellow-50 rounded shadow">Mouse</div>
            <div className="p-6 bg-red-50 rounded shadow">Accessories</div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-16 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with Tech Bazar
        </h2>
        <p className="mb-6">
          Subscribe to our newsletter for latest products & offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto flex-1"
          />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      {/* 6. BANNER / PROMO */}
      <section className="py-16 bg-yellow-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Deals!</h2>
        <p className="text-lg">
          Grab up to 50% off on select products. Limited time offer.
        </p>
      </section>

      {/* 7. TESTIMONIAL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            “Amazing service! The product quality is top notch. Delivery was
            super fast.”
          </p>
        </div>
      </section>
    </div>
  );
}
