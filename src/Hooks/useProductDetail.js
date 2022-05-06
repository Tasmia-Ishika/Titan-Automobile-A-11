import { useEffect, useState } from "react";

const useProductDetail = detailId => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${detailId}`
       console.log(url)
        fetch(url)
            .then(res => res.json())
           .then(data => setProducts(data));
     }, [detailId]);
    return [products]
}
export default useProductDetail;