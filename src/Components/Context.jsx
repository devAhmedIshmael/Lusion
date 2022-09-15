import React, { createContext } from "react";

const Context = createContext({
  homeSecOneProductsContext: [],
  bestSellingContext: [],
  shopProductsContext: [],
  homeSecFourContext: [],
  showContext: false,
  handleCloseContext: () => {},
  handleShowContext: () => {},
  addToCartContext: () => {},
  countContext: 0,
  addedProductsContext: [],
  incrementContext: () => {},
  decrementContext: () => {},
  removeContext: () => {},
  totalItemsContext: 0,
  totalPriceContext: 0,
});

export default Context;
