import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import CartContainer from "./components/CartContainer";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");

  const showProducts = (productName) => {
    const output = products.filter((product) => {
      return product.name === productName;
    });
    setFilteredProducts(output);
    console.log(output, filteredProducts);
  };

  const total = currentSale
    .reduce((acc, item) => item.price + acc, 0)
    .toFixed(2);

  const handleClick = (id) => {
    const output = products.find((product) => product.id === id);
    if (!currentSale.includes(output)) {
      setCurrentSale([...currentSale, output]);
    }
  };

  const removeItem = (id) => {
    const output = currentSale.find((product) => product.id === id);
    const outputIndex = currentSale.indexOf(output);
    currentSale.splice(outputIndex, 1);
    setCurrentSale([...currentSale]);
  };

  const [products] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 17.25 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 18.25 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 19.25 },
    { id: 4, name: "Extra Big-Burguer", category: "Sanduíches", price: 26.25 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 8.25 },
    { id: 6, name: "Coca", category: "Bebidas", price: 8.25 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 8.25 },
  ]);

  return (
    <body className="body">
      <h1 className="pageTitle">Hamburgueria Explosion Flavors</h1>
      <div className="searchSection">
        <input
          className="searchSectionInput"
          type="text"
          value={currentSearch}
          placeholder="Procure um produto ..."
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button
          className="searchSectionButton"
          onClick={() => showProducts(currentSearch)}
        >
          Procurar
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <MenuContainer products={filteredProducts} handleClick={handleClick} />
      ) : (
        <MenuContainer products={products} handleClick={handleClick} />
      )}
      <h2 className="cartTitle">Carrinho: </h2>
      <CartContainer products={currentSale} removeItem={removeItem} />
      <p className="totalPrice">SubTotal - {total}</p>
    </body>
  );
}

export default App;
