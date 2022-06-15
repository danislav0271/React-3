import React, { FunctionComponent } from 'react';
import RobotContainer from './RobotContainer';
import Content from './Content';
import Robot from '../classes/robot';

interface RobotSectionProps {
  robot: Robot
}

const RobotSection: FunctionComponent<RobotSectionProps> = ({
  robot,
}) => {
  return (
    <div className='factory-section slide' id='slide-1'>
        <h2>{robot.Type}</h2>
        <div className='content-wrapper'>
            <RobotContainer robot={robot}/>
            <Content />
        </div>
    </div>
  )
}

export default RobotSection