import React from 'react';
import "./App.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryCards from "./components/CountryCards";
import SearchBar from "./components/SearchBar";


function App() {
  return (
    <div>
      <Cards />
      <Chart />
      <SearchBar />
      <CountryCards />
    </div>
  );
}

export default App;
