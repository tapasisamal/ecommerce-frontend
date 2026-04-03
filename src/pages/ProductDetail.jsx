import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductDetail() {

    const [product, setProduct] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
      console.log("ID from URL:", id);
      const fetchProduct = async() => {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await res.json();

        setProduct(data || null);
      }
      fetchProduct() 
    }, [id])

    if(!product) return <p className="text-center mt-10">No product found</p>

    return(

    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={product.images}
          alt={product.title}
          className="w-full h-80 object-contain rounded"
        />

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-xl font-bold mb-4">₹{product.price}</p>

          <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            dispatch(addToCart(product));
            navigate("/cart");
          }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    )
}

export default ProductDetail