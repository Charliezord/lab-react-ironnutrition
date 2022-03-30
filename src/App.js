import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} alt="food" style={{width: '300px'}}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
