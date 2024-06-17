import products from "./products";

const productsArr = products;

function getProductData(id) {
  let productData = productsArr.find((product) => product.id === id);
  return productData;
}

export { productsArr, getProductData };
