import React,{useState} from 'react';
import './app.css';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart  ';
function App() {
  const [cart, setCart ] = useState([]);

  const[page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([{
    name:'AA battery',
    cost:'euro 2.99',
    image:'https://images-na.ssl-images-amazon.com/images/I/71%2BdaVODhXL._SL1500_.jpg'
   },
  {
    name:'Blanket',
    cost:'euro 19.99',
    image:'https://emmibaby.com/wp-content/uploads/2020/01/T%C3%A6ppe-Gr%C3%B8n-1.jpg'
  },
 ]);
 const addToCart = (product) =>{
   
   setCart([...cart, product]);
 };
 const navigateTo = (nextPage) => {
   setPage(nextPage);
 };
 const renderProducts = () => (
  <>
  <h1>Products</h1>

  <div className ="products">
    {products.map((product, idx) =>(
    <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
    <button onClick={() => addToCart(product)}>
      Add to cart
    </button>
  </div>

  ))}
  </div>
  </>

 );
 const renderCart = () =>(
  <>
  <h1>Cart</h1>

  <div className ="products">
    {cart.map((product, idx) =>(
    <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
      {}
    
  </div>

  )
  )}
  </div>
  </>

 );
  return (
    <div className="App">
      <header>
       <button onClick = {() =>navigateTo(PAGE_PRODUCTS)}>View products</button>
       <button onClick = {() =>navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button> 
       
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()} 

      
      
    </div>
  );
}

export default App;
