import { createContext, useState } from "react";
import { getProductData } from "./productStore";

export const CartContext = createContext({
  items: [],
  wishListItems: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  deleteFromWishlist: () => {},
  getTotalCost: () => {},
  addToWishList: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);

  function getProductQuantity(id) {
    let quantity = cartProducts.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((product) =>
      product.filter((product) => {
        return product.id !== id;
      })
    );
  }
  function deleteFromWishlist(id) {
    setWishListProducts((product) =>
      product.filter((product) => {
        return product.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((product) => {
      const productData = getProductData(product.id);
      totalCost += productData.price * product.quantity;
    });
    return totalCost;
  }

  function addToWishList(id) {
    // setWishListProducts([...wishListProducts, { id: id }]);
    setWishListProducts([...wishListProducts, { id }]);
  }

  const contextValue = {
    items: cartProducts,
    wishListItems: wishListProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    deleteFromWishlist,
    getTotalCost,
    addToWishList,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
