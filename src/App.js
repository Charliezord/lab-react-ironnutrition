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
  const [filter, setFilter] = useState("");
  const filteredFoods = allFoods.filter((elem) => {
    // console.log(food.name);
    return elem.name.toLowerCase().includes(filter.toLowerCase())
  })
  console.log("Hi", filteredFoods);
  return (
    <div className="App">
    <SearchBar filterProp={filter} setFilterProp={setFilter}/>
    <AddFoodForm allFoodsList = {allFoods} setAllFoods = {setAllFoods}/>
      {filteredFoods.map((singleFood, index) => {
        return (
          <div key={"foodsdiv" + index}>
            <FoodBox food={singleFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
