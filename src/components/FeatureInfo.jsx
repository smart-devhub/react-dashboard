import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './feature.css'

const FeatureInfo = () => {
  return (
      <div className="features">
          <div className="featureItems">
              <span className='fuatureTitle'>Revenue</span>
              <div className="featureMoneyContainer">
                  <span className='featureMoney'>$ 2450.34</span>
                  <span className='MoneyRate'>-12.344<ArrowDownward className='featureIcon negative'/></span>
              </div>
              <span className='featureSubTitle'>Compared to last Month</span>
          </div>

          <div className="featureItems">
              <span className='fuatureTitle'>Sales</span>
              <div className="featureMoneyContainer">
                  <span className='featureMoney'>$ 2410.34</span>
                  <span className='MoneyRate'>-12.344<ArrowDownward className='featureIcon negative'/></span>
              </div>
              <span className='featureSubTitle'>Compared to last Month</span>
          </div>

          <div className="featureItems">
              <span className='fuatureTitle'>Cost</span>
              <div className="featureMoneyContainer">
                  <span className='featureMoney'>$ 2450.34</span>
                  <span className='MoneyRate'>34.344<ArrowUpward className='featureIcon '/></span>
              </div>
              <span className='featureSubTitle'>Compared to last Month</span>
          </div>
      </div>
  );
};

export default FeatureInfo