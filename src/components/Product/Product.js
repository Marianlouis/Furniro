import React from 'react';
import './Product.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [product, setProduct] = useState([]);

    return (
        <div className="Product">
            Product Component
        </div>
    );
}

export default Product;
