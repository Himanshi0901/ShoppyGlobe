import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          setProduct(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    return { product, loading, error };
  };
  
export default useFetchProduct;