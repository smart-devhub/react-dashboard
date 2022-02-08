import React from 'react';
import './largeWedget.css'
 
const Button =({type})=>{
    return(
        <button className={"lgWidgetButton " + type}>{type}</button>
    )
}
const LargeWidget = () => {
  return (
      <div className='lgWidget'>
          <h3 className="lgWidgetTitle">Latest Transactions</h3>
          <table className="lgWidgetTable">
              <tr className="lgWidgetTr">
                  <th className="lgWidgetTh">Customer</th>
                  <th className="lgWidgetTh">Date</th>
                  <th className="lgWidgetTh">Amount</th>
                  <th className="lgWidgetTh">Status</th>
              </tr>
              <tr className='lgWidgetTr'>
                  <td className="lgWidgetUser">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
                      =crop&w=580&q=80" alt="" className='lgWidgetuserImg' />
                      <span className='lgWidUserName'>David Warner</span>
                  </td>
                  <td className='lgWidgetDate'>08-02-2022</td>
                  <td className='lgWidgetAmount'>$343</td>
                  <td className='lgWidgetStatus'><Button type="Approved"/></td>

              </tr>
              <tr className='lgWidgetTr'>
                  <td className="lgWidgetUser">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
                      =crop&w=580&q=80" alt="" className='lgWidgetuserImg' />
                      <span className='lgWidUserName'>David Warner</span>
                  </td>
                  <td className='lgWidgetDate'>08-02-2022</td>
                  <td className='lgWidgetAmount'>$343</td>
                  <td className='lgWidgetStatus'><Button type="Declined"/></td>

              </tr>
              <tr className='lgWidgetTr'>
                  <td className="lgWidgetUser">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
                      =crop&w=580&q=80" alt="" className='lgWidgetuserImg' />
                      <span className='lgWidUserName'>David Warner</span>
                  </td>
                  <td className='lgWidgetDate'>08-02-2022</td>
                  <td className='lgWidgetAmount'>$343</td>
                  <td className='lgWidgetStatus'><Button type="Pending"/></td>

              </tr>
              <tr className='lgWidgetTr'>
                  <td className="lgWidgetUser">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit
                      =crop&w=580&q=80" alt="" className='lgWidgetuserImg' />
                      <span className='lgWidUserName'>David Warner</span>
                  </td>
                  <td className='lgWidgetDate'>08-02-2022</td>
                  <td className='lgWidgetAmount'>$343</td>
                  <td className='lgWidgetStatus'><Button type="Approved"/></td>

              </tr>
          </table>
      </div>
  )
};

export default LargeWidget;
