import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import { useState } from 'react';


function App() {
  const [allFoods, setAllFoods] = useState(foods);
  
  return (
    <div className="App">
    <AddFoodForm allFoodsList = {allFoods} setAllFoods = {setAllFoods}/>
      {allFoods.map((singleFoods, index) => {
        return (
          <div key={"foodsdiv" + index}>
            <FoodBox food={singleFoods} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
