import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import { useState } from 'react';
import SearchBar from "./Components/SearchBar";


function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState("");
  const filteredFoods = allFoods.filter((elem) => {
  
    return elem.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log("Hi", filteredFoods);
  return (
    <div className="App">
    <SearchBar searchProp={search} setSearchProp={setSearch}/>
    <AddFoodForm allFoodsList = {allFoods} setAllFoods = {setAllFoods}/>
      {filteredFoods.map((singleFood, index) => {
        return (
          <div key={"foodsdiv" + index}>
            <FoodBox food={singleFood} allFoodsList = {allFoods} setAllFoods = {setAllFoods}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
