import { useEffect, useState } from 'react';
import anhToiUu from './assets/2025.jpg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState<string>("Nguyễn Quốc Đạt Originals");

  const handleIncreaseClick = () => {
    setNumber(number + 1);
    setName("Nguyễn Quốc Đạt Originals");
  };

  const handleDecreaseClick = () => {
    setNumber(number - 1);
    setName("Nguyễn Quốc Đạt Originals");
  };

  const fetchAPI = () => {
    console.log("Fetching API...");
  };

  useEffect(fetchAPI, [number, name]);

  return (
    <div>
      <img src={anhToiUu} alt="Nguyễn Quốc Đạt Originals" id="img" />
      <h1 id="very-first">{name}</h1>
      <h1 id="first">Hãy đếm số!</h1>
      <h1 id="second">Số {number}</h1>
      <button onClick={handleDecreaseClick} className="minus-button">Đếm số theo thứ tự giảm dần</button>
      <button onClick={handleIncreaseClick} className="add-button" style={{margin: '10px'}}>Đếm số theo thứ tự tăng dần</button>
    </div>
  );
}

export default App;