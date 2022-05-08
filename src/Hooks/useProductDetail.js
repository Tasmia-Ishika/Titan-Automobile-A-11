import { useEffect, useState } from "react";

const useProductDetail = detailId => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://whispering-spire-22229.herokuapp.com/product/${detailId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [detailId]);
    return [products]
}
export default useProductDetail;