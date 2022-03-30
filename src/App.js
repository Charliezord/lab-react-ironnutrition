import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  console.log(foods);
  return (
    <div className="App">
      {allFoods.map((singleFoods, index) => {
        return (
          <div key={"foodsdiv" + index}>
            {/* <p>{singleFood.name}</p> */}
            {/* <img src={singleFood.image} alt="food" style={{ width: '300px' }} /> */}
            <FoodBox food={singleFoods} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
