import "./CSS/App.css";
import { React, useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Context from "./Components/Context";
import Main from "./Components/Main";

const App = () => {
  const [homeSecOneProducts, setHomeSecOneProducts] = useState([
    {
      id: 1,
      imgSrc: require("./images/home-sec-1.1.jpg"),
      type: `Clothing`,
      availability: 5,
    },
    {
      id: 2,
      imgSrc: require("./images/home-sec-1.2.jpg"),
      type: `Bag Brand`,
      availability: 20,
    },
    {
      id: 3,
      imgSrc: require("./images/home-sec-1.3.jpg"),
      type: `Accessories`,
      availability: 6,
    },
    {
      id: 4,
      imgSrc: require("./images/home-sec-1.4.jpg"),
      type: `Shoes`,
      availability: 8,
    },
  ]);

  const [bestSelling, setBestSelling] = useState([
    {
      id: 5,
      productImg: require("./images/home-sec-2.1.jpg"),
      productTitle: `Quilted Gilet With Hood`,
      price: 180.0,
    },
    {
      id: 6,
      productImg: require("./images/home-sec-2.2.jpg"),
      productTitle: `Quilted Gilet With Hood`,
      price: 110.0,
    },
    {
      id: 7,
      productImg: require("./images/home-sec-2.3.jpg"),
      productTitle: `Quilted Gilet With Hood`,
      price: 150.0,
    },
    {
      id: 8,
      productImg: require("./images/home-sec-2.4.jpg"),
      productTitle: `Quilted Gilet With Hood`,
      price: 100.0,
    },
  ]);

  const [shopProducts, setShopProducts] = useState([
    {
      id: 9,
      productImg: require("./images/shop1.jpg"),
      productTitle: `Pants`,
      price: 120.0,
      quantity: 1,
    },
    {
      id: 10,
      productImg: require("./images/shop2.jpg"),
      productTitle: `Pants`,
      price: 90.0,
      quantity: 1,
    },
    {
      id: 11,
      productImg: require("./images/shop3.jpg"),
      productTitle: `Dress`,
      price: 200.0,
      quantity: 1,
    },
    {
      id: 12,
      productImg: require("./images/shop4.jpg"),
      productTitle: `Dress`,
      price: 250.0,
      quantity: 1,
    },
    {
      id: 13,
      productImg: require("./images/shop5.jpg"),
      productTitle: `Dress`,
      price: 90.0,
      quantity: 1,
    },
    {
      id: 14,
      productImg: require("./images/shop6.jpg"),
      productTitle: `Dress`,
      price: 300.0,
      quantity: 1,
    },
  ]);

  const [homeSecFour, setHomeSecFour] = useState([
    { id: 1, img: require("./images/home-sec-4.1.jpg") },
    { id: 2, img: require("./images/home-sec-4.2.jpg") },
    { id: 3, img: require("./images/home-sec-4.3.jpg") },
    { id: 4, img: require("./images/home-sec-4.4.jpg") },
    { id: 5, img: require("./images/home-sec-4.5.jpg") },
    { id: 6, img: require("./images/home-sec-4.6.jpg") },
  ]);

  // sidebar

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addedProducts, setAddedProducts] = useState([]);

  const [count, setCount] = useState(0);

  const addToCart = (
    productId,
    productImg,
    productTitle,
    productPrice,
    productQuantity
  ) => {
    const productDetails = {
      id: productId,
      img: productImg,
      title: productTitle,
      price: productPrice,
      quantity: productQuantity,
    };

    if (addedProducts.some((e) => e.id === productDetails.id)) {
      window.alert(`${productDetails.title} has been added to your cart`);
    } else {
      addedProducts.push(productDetails);

      setCount(count + 1);
    }
  };

  const increment = (id) => {
    const newAddedProducts = addedProducts.map((e) => {
      {
        id === e.id && e.quantity++;
      }
      return e;
    });
    setAddedProducts(newAddedProducts);
  };

  const decrement = (id) => {
    const newAddedProducts = addedProducts.map((e) => {
      if (id === e.id) {
        {
          e.quantity > 1 && e.quantity--;
        }
      }

      return e;
    });
    setAddedProducts(newAddedProducts);
  };

  const remove = (id) => {
    const filteredAddedProducts = addedProducts.filter((e) => {
      return id !== e.id;
    });
    setAddedProducts(filteredAddedProducts);

    setCount(count - 1);
  };

  const [totalItems, setTotalItems] = useState(0);

  const updateTotalItems = addedProducts
    .map((e) => {
      return e.quantity;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  useEffect(() => {
    setTotalItems(updateTotalItems);
  }, [remove]);

  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = addedProducts
    .map((e) => {
      return e.quantity * e.price;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  useEffect(() => {
    setTotalPrice(updateTotalPrice);
  }, [remove]);

  return (
    <Context.Provider
      value={{
        homeSecOneProductsContext: homeSecOneProducts,
        bestSellingContext: bestSelling,
        shopProductsContext: shopProducts,
        homeSecFourContext: homeSecFour,
        showContext: show,
        handleCloseContext: handleClose,
        handleShowContext: handleShow,
        addToCartContext: addToCart,
        countContext: count,
        addedProductsContext: addedProducts,
        incrementContext: increment,
        decrementContext: decrement,
        removeContext: remove,
        totalItemsContext: totalItems,
        totalPriceContext: totalPrice,
      }}
    >
      <NavBar />
      <Main />
      <Footer />
    </Context.Provider>
  );
};

export default App;
