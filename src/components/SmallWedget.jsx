import { Visibility } from '@material-ui/icons';
import React from 'react';
import './smallwedget.css'

const SmallWedget = () => {
  return (
      <div className='smallWidget'>
          <span className="smallWidTitle">New Join Members</span>
          <ul className="smallWidList">
              <li className="smallWidItem">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid
                  =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""
                   className='smallWidImg' />

                   <div className="smallWidUserInfo">
                       <span className='SmallWidUserName'>Romeo</span>
                       <span className='SmallWidUserTitle'>Software Engineer</span>
                   </div>

                   <button className="smallWidbutton"><Visibility/> Display</button>
              </li>
              <li className="smallWidItem">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid
                  =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""
                   className='smallWidImg' />
                   <div className="smallWidUserInfo">
                       <span className='SmallWidUserName'>Romeo</span>
                       <span className='SmallWidUserTitle'>Software Engineer</span>
                   </div>
                   <button className="smallWidbutton"><Visibility/> Display</button>
              </li>
              <li className="smallWidItem">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid
                  =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""
                   className='smallWidImg' />
                   <div className="smallWidUserInfo">
                       <span className='SmallWidUserName'>Romeo</span>
                       <span className='SmallWidUserTitle'>Software Engineer</span>
                   </div>
                   <button className="smallWidbutton"><Visibility/> Display</button>
              </li>
              <li className="smallWidItem">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid
                  =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""
                   className='smallWidImg' />
                   <div className="smallWidUserInfo">
                       <span className='SmallWidUserName'>Romeo</span>
                       <span className='SmallWidUserTitle'>Software Engineer</span>
                   </div>
                   <button className="smallWidbutton"><Visibility/> Display</button>
              </li>
              <li className="smallWidItem">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid
                  =MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""
                   className='smallWidImg' />
                   <div className="smallWidUserInfo">
                       <span className='SmallWidUserName'>Romeo</span>
                       <span className='SmallWidUserTitle'>Software Engineer</span>
                   </div>
                   <button className="smallWidbutton"><Visibility/> Display</button>
              </li>
          </ul>
      </div>
  );
};

export default SmallWedget;
