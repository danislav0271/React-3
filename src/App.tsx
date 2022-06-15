import React, { useState } from 'react';
import './App.css';
import RobotForm from './Components/RobotForm';
import RobotSection from './Components/RobotSection';
import Header from './Components/Header';
import Robot from './classes/robot';

function App() {
  const [robot, setRobot] = useState<Robot>();

  const createRobot = (robot: Robot): void => {
    setRobot(robot);
  }

  return (
    <div className="App">
      <Header />
      {robot && <RobotSection robot={robot} />}
      <RobotForm createRobot={createRobot}/>
    </div>
  );
}

export default App;
