import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries]= useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCountries(data);
      // const names = data.map(country => country.name);
      // console.log(names);
      
    })
    .catch(error => error);
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddCountry =(country) =>{
        const newCart = [...cart, country]
        setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>total countries: {countries.length}</h1>
        <h2>Country added: {cart.length}</h2>
        <Cart cart={cart}></Cart>
          {
            countries.map(cnt => <Country handleAddCountry ={handleAddCountry} country={cnt} key={cnt.alpha3code}></Country>)
          }
      </header>
    </div>
  );
}

export default App;
