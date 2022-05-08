import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://whispering-spire-22229.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
}
export default useProduct;