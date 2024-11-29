import React, { useState } from 'react';

function FilterSidebar({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState('all');

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice, category });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      <div className="mb-3">
        <label htmlFor="minPrice" className="form-label">Min Price</label>
        <input
          type="number"
          className="form-control"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="maxPrice" className="form-label">Max Price</label>
        <input
          type="number"
          className="form-control"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          className="form-select"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="bakery">Bakery</option>
          <option value="dairy">Dairy</option>
          <option value="electronics">Electronics</option>
          <option value="beverages">Beverages</option>
          <option value="fast-food">Fast Food</option>
          <option value="poultry">Poultry</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default FilterSidebar;