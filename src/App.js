import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((singleFood) => {
        return (
          <div>
            <p>{singleFood.name}</p>
            <img src={singleFood.image} alt="food" style={{width: '300px'}}/>
            {/* <FoodBox food = {singleFood}/> */}
          </div>
        );
      })}
      
      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
      }}/>
    </div>
 
  )}

export default App;
