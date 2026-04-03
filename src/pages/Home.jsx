import Products from "./Products";

function Home() {

    return(
    <div>

      <div className="p-6 text-center bg-gray-100">
        <h1 className="text-3xl font-bold">
          Welcome to our Store 🛒
        </h1>
        <p className="mt-2">Best products at best prices</p>
      </div>

      <div className="p-6">
        <Products />
      </div>
    </div>
    )
}

export default Home