import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const[countries,setCountries]=useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
      console.log(data);
      const names =data.map(country=>country.name)
      console.log(names);

    })
    .catch(error=>console.log(error))
  },[])

  const handleAddCountry= (country) => 
  {const newCart= [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
     <h1>Country Loaded:{countries.length}</h1>
     <h4>Country Added:{cart.length}</h4>
     <Cart cart={cart}></Cart>
     <ul>
      {
        countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} key={country.cca2}></Country>)
      }
     </ul>

      
    </div>
  );
}


export default App;
