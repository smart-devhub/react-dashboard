import React from 'react';
import Chart from './Chart';
import FeatureInfo from './FeatureInfo';
import './Home.css'
import { userData } from '../dummyData';
import SmallWedget from './SmallWedget';
import LargeWidget from './LargeWidget';


const Home = () => {
  return (
  <div className='home'>
      <FeatureInfo/>
     
      <Chart title="User Analytics" data={userData} grid datakey="Active User"/>
      
      <div className='homeWidget'>
        <SmallWedget/>
        <LargeWidget/>
      </div>

  </div>
  )
};

export default Home;
