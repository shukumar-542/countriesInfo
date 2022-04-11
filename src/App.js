import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';

function App() {
  const [countries, setCountries]= useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      
    })
  },[])
const [cart , setCart] = useState([])
  const handleAddCountry = (country)=>{
    const newCart = [...cart, country ]
    setCart(newCart);
  }
    
  
  return (
    <div className="App">
      <header>
        <h2>Total Countries: {countries.length}</h2>
        <h2>Added Countries : {cart.length}</h2>
      
          {
            countries.map(country => <Countries country ={country} handleAddCountry={handleAddCountry}></Countries>)
          }
       
      </header>
    </div>
  );
}

export default App;
