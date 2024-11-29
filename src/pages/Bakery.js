import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';

function Bakery() {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    sortBy: 'newest'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Apply filters to your product list here
  };

  return (
    <div className="container">
      <div className="row">
        {/* Filter Sidebar */}
        <div className="col-md-3">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <h2>Bakery Products</h2>
          {/* Add your product list here */}
          <p>Filtered products will be displayed here based on the selected filters.</p>
          {/* Example of rendering products based on filters */}
          {/* products.map(product => (
            <ProductCard key={product.id} product={product} />
          )) */}
        </div>
      </div>
    </div>
  );
}

export default Bakery;
