import { NotificationsNone,Language,Settings } from '@material-ui/icons';
import React from 'react';
import './Topbar.css'

const Topbar = () => {
  return (
  <div className='topbar'>
      <div className='topbarWrapper'>
          <div className='left'>
              <span className='logo'>Romeo</span>
          </div>
          <div className='right'>
              <div className='iconContainer'>
                  <NotificationsNone/>
                  
              </div>
              <div className='iconContainer'>
                  <Language/>
                 
              </div>
              <div className='iconContainer'>
                  <Settings/>
                  
              </div>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className='avatar' />
          </div>

      </div>

  </div>
  )
};

export default Topbar;
