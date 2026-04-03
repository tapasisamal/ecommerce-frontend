export const API_BASE_URL = "https://api.freeapi.app/api/v1";

// AUTH
export const endpoints = {
  register: "/users/register",
  login: "/users/login",
  logout: "/users/logout",
  currentUser: "/users/current-user",

  // PROFILE
  profile: "/ecommerce/profile",

  // PRODUCTS
  products: (page = 1, limit = 10) =>
    `/ecommerce/products?page=${page}&limit=${limit}`,

  productById: (id) =>
    `/ecommerce/products/${id}`,

  // ORDERS 
  myOrders: (page = 1, limit = 10) =>
    `/ecommerce/profile/my-orders?page=${page}&limit=${limit}`,

  // CART
  cart: "/ecommerce/cart",
  clearCart: "/ecommerce/cart/clear",
  removeCartItem: (id) => `/ecommerce/cart/item/${id}`,

  // ADDRESSES
  addresses: (page = 1, limit = 10) =>
  `/ecommerce/addresses?page=${page}&limit=${limit}`,
  addressById: (id) => `/ecommerce/addresses/${id}`,
};