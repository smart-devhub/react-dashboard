import React from 'react';
import './userPage.css'
import {useParams,Link} from 'react-router-dom'
import {PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationSearching,Publish} from '@material-ui/icons'

const UserPage = () => {
    const {id}=useParams()
  return (
      <div className='userPage'>
          <div className="userTitleContainer">
              <h1>Edit User</h1>
              <Link to="/newUser"><button className='Createbutton'>Create</button></Link>
          </div>

          <div className="userContainer">
              <div className="usershow">
                  <div className="usershowTop">
                      <img src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=
                      MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""
                      className='userShowImg'
                      />
                      <div className="usershowTitleContainer">
                          <span className='usershowName'>Anna Becker</span>
                          <span className='usershowTitle'>Software Engineer</span>
                      </div>
                  </div>
                  <div className="userDetails">
                      <span className='userDetailTitle'>Account Details</span>
                      <div className="usershowDetails">
                          <PermIdentity/>
                          <span className='userDetailsTitle'>anabeck22</span>
                      </div>
                      <div className="usershowDetails">
                          <CalendarToday/>
                          <span className='userDetailsTitle'>10-02-1999</span>
                      </div>
                      <span className='usershowDetails' style={{fontWeight:"300"}} >Contact Details</span>
                      <div className="usershowDetails">
                          <PhoneAndroid/>
                          <span className='userDetailsTitle'>+1 123 3435 23</span>
                      </div>
                      <div className="usershowDetails">
                          <MailOutline/>
                          <span className='userDetailsTitle'>anabeck@gmail.com</span>
                      </div>
                      <div className="usershowDetails">
                          <LocationSearching/>
                          <span className='userDetailsTitle'>New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userupdateTitle">Edit</span>
                  <form action="" className="userUpdateForm">
                      <div className="formleft">
                          <div className="formItem">
                              <label className="formlabel">UserName</label>
                              <input type="text" className="formInput" placeholder='anabeck22' />
                          </div>
                          <div className="formItem">
                              <label className="formlabel">Full Name</label>
                              <input type="text" className="formInput" placeholder='Anna Becker' />
                          </div>
                          <div className="formItem">
                              <label className="formlabel">Email</label>
                              <input type="email" className="formInput" placeholder='anabeck@gmail.com' />
                          </div>
                          <div className="formItem">
                              <label className="formlabel">Phone</label>
                              <input type="text" className="formInput" placeholder='+1 123 3435 23' />
                          </div>
                          <div className="formItem">
                              <label className="formlabel">Address</label>
                              <input type="text" className="formInput" placeholder='New York | USA' />
                          </div>
                      </div>
                      <div className="formRight">
                          <div className="updateContainer">
                              <img src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx
                              waG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt='image' className='updateImg'/>
                              <label htmlFor="file"><Publish className='updataIcon'/></label>
                              <input type="file" id='file' style={{display:"none"}} />
                          </div>
                          <button className="userupdateButton">Update</button>
                      </div>
                  </form>

              </div>
          </div>
          

      </div>
  )
};

export default UserPage;
