import React from 'react';
import Cards from "./components/Cards";
import CountryCards from "./components/CountryCards";
import PrimarySearchAppBar from "./components/SearchBar";


function App() {
  return (
    <div>
      <Cards />
      <PrimarySearchAppBar />
      <CountryCards />
    </div>
  );
}

export default App;
