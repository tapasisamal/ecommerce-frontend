import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async() => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();

            console.log(data)

            setProducts(data || []);
        }
        fetchProduct()
    }, [])
    
    return(
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (

          <ProductCard key={product.id} product={product}/>
          
        ))}
      </div>
    </div>
    )
}

export default Products
