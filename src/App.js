import React, { useEffect } from 'react';
import "./App.css";
import Cards from "./components/Cards";
import CountryCards from "./components/CountryCards";
import PrimarySearchAppBar from "./components/SearchBar";


function App() {
  const url = "https://api.thevirustracker.com/free-api?global=stats";

  useEffect(() => {
      async function fetchdata() {
          try{
              const response = await fetch(url);
              const data = await response.json();
              console.log(data);
          }
          catch(error){
              console.log("error");
          }
      }
  }, []);


  return (
    <div>
      <Cards />
      <PrimarySearchAppBar />
      <CountryCards />
    </div>
  );
}

export default App;
