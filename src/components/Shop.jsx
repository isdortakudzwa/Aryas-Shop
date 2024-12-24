import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Heart,
  Star,
  X,
} from 'lucide-react';

import './Fonts/shop.css'; // Import the CSS file

const ageCategories = [
  { id: 'babies', name: 'Babies', ageRange: '0-24 months', sizes: ['0-3M', '3-6M', '6-12M', '12-18M', '18-24M'] },
  { id: 'toddlers', name: 'Toddlers', ageRange: '2-4 years', sizes: ['2T', '3T', '4T'] },
  { id: 'little-kids', name: 'Little Kids', ageRange: '4-7 years', sizes: ['4', '5', '6', '7'] },
  { id: 'big-kids', name: 'Big Kids', ageRange: '8-12 years', sizes: ['8', '10', '12'] },
  { id: 'teens', name: 'Teens', ageRange: '13-18 years', sizes: ['XS', 'S', 'M', 'L'] },
];

const clothingCategories = [
  'T-Shirts & Tops', 'Dresses', 'Pants & Shorts', 'Outerwear',
  'Sleepwear', 'School Uniforms', 'Swimwear', 'Special Occasions', 'Accessories',
];

const products = [
  // Sample product data...
  { id: 1, name: 'T-Shirt', category: 'T-Shirts & Tops', price: 15, size: 'S' },
  { id: 2, name: 'Dress', category: 'Dresses', price: 25, size: 'M' },
];

const KidsCollectionPage = () => {
  const [selectedAgeCategory, setSelectedAgeCategory] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) =>
    (selectedAgeCategory === 'all' || product.category === selectedAgeCategory) &&
    (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const AgeCategoryTabs = () => (
    <div className="tabs">
      {ageCategories.map((age) => (
        <button
          key={age.id}
          className={`tab ${selectedAgeCategory === age.id ? 'active' : ''}`}
          onClick={() => setSelectedAgeCategory(age.id)}
        >
          {age.name}
        </button>
      ))}
    </div>
  );

  const FilterSidebar = () => (
    <div className={`filter-sidebar ${showFilters ? 'visible' : 'hidden'}`}>
      <button onClick={() => setShowFilters(false)} className="close-button">
        <X />
      </button>
      <h3>Filters</h3>
      {/* Add filter controls here */}
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );

  return (
    <div className="kids-collection-page">
      <header className="header">
        <h1>Kids Collection</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search />
        </div>
        <button onClick={() => setShowFilters(true)} className="filter-button">
          <SlidersHorizontal />
        </button>
      </header>
      <main className="main-content">
        <AgeCategoryTabs />
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <FilterSidebar />
    </div>
  );
};

export default KidsCollectionPage;
