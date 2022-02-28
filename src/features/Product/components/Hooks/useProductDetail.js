import { useEffect, useState } from "react";
import productApi from "../../../../API/productApi";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        if (loading) {
          const response = await productApi.get(productId);
          setProduct(response);
        }
      } catch (error) {}
    })();
    setLoading(false);
  }, [loading, productId]);
  return { loading, product };
}
