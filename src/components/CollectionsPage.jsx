import React from 'react';
import { useState } from 'react';
import { Sun, Moon, Star, Eye, ArrowUpDown, ShoppingCart } from 'lucide-react';
import './Fonts/collections.css';
import kim1 from './Images/girl-white-t-shirt-with-youth-typography-jacket-winter-fashion-shoot.jpg'
import kim2 from './Images/portrait-cool-teenage-boy-wearing-hoodie_23-2149085833.avif'
import kim3 from './Images/full-length-portrait-smiling-little-girl-hat.jpg'
// Updated translations for English and Shona only
const translations = {
  en: {
    product: {
      title: "CosmicGear MeteorFlex Digital Watch",
      category: "Smart Watches",
      button: "Add to Cart",
      actions: {
        view: "View",
        favorite: "Favorite",
        compare: "Compare"
      }
    },
    theme: {
      l: "Light",
      d: "Dark"
    }
  },
  sn: {  // Changed from 'ar' to 'sn' for Shona
    product: {
      title: "Wachi yeDigital yeCosmicGear MeteorFlex",
      category: "Wachi Dzepamusoro",
      button: "Isa muBasket",
      actions: {
        view: "Ona",
        favorite: "Dzidzai",
        compare: "Enzanisa"
     }
    },
    theme: {
      l: "Chiedza",
      d: "Rima"    
    }
  }
};

const products = [
  {
    id: 1,
    title: "Digital Smart Watch",
    category: "Watches",
    price: 100,
    discountedPrice: 50,
    image: kim2, // Ensure correct image paths
    color: '#0e653b'
  },
  {
    id: 2,
    title: "Fitness Tracker",
    category: "Wearables",
    price: 80,
    discountedPrice: 40,
    image: kim1, // Ensure correct image paths
    color: '#0e653b'
  },
  {
    id: 3,
    title: "Classic Timepiece",
    category: "Watches",
    price: 150,
    discountedPrice: 75,
    image:kim3, // Ensure correct image paths
    color: '#0e653b'
  },
];

const ProductCard = ({ product, theme, lang }) => (
  <div className={`product-card ${theme}`}>
    <div className="product-image-container">
      <img 
        src={product.image}
        className="product-image"
        alt={product.title}
        loading='lazy'
      />
      <div className="product-overlay" style={{ backgroundColor: `${product.color}99` }}>
        <div className="action-buttons">
          {[ // Action buttons with icons
            { icon: <Star />, tooltip: translations[lang].product.actions.favorite },
            { icon: <Eye />, tooltip: translations[lang].product.actions.view },
            { icon: <ArrowUpDown />, tooltip: translations[lang].product.actions.compare }
          ].map((action, index) => (
            <button key={index} className="action-btn">
              <span className="action-icon" style={{ color: product.color }}>
                {action.icon}
              </span>
              <span className="tooltip">
                {action.tooltip}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="product-info">
      <div className="product-header">
        <h2 className="product-title">
          {product.title}
        </h2>
        <a href="/" className="product-category" style={{ color: product.color }}>
          {product.category}
        </a>
      </div>

      <div className="product-footer">
        <div className="price-container">
          <div className="discount-badge">50%</div>
          <div className="price">
            ${product.discountedPrice} <sup className="original-price">${product.price}</sup>
          </div>
        </div>

        <button className="add-to-cart" style={{ 
          backgroundColor: product.color,
          borderColor: product.color
        }}>
          {translations[lang].product.button}
          <ShoppingCart />
        </button>
      </div>
    </div>
  </div>
);

const CollectionPage = () => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');

  return (
    <div className="collection-container">
      <h2 className="collection-title">Shop Now</h2> {/* Added H2 tag here */}

      <div className="controls-container">
        <div className="theme-language-controls">
          <button 
            onClick={() => setTheme('light')}
            className={`control-btn ${theme === 'light' ? 'active' : ''}`}
          >
            <Sun />
            {translations[lang].theme.l}
          </button>
          <button 
            onClick={() => setTheme('dark')}
            className={`control-btn ${theme === 'dark' ? 'active' : ''}`}
          >
            <Moon />
            {translations[lang].theme.d}
          </button>
          <div className="divider" />
          <button 
            onClick={() => setLang('en')}
            className={`control-btn ${lang === 'en' ? 'active' : ''}`}
          >
            English
          </button>
          <button 
            onClick={() => setLang('sn')}
            className={`control-btn ${lang === 'sn' ? 'active' : ''}`}
          >
            Shona
          </button>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            theme={theme}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
