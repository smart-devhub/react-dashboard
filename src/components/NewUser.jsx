import React from 'react';
import './NewUser.css'

const NewUser = () => {
  return (
      <div className='newUser'>
          <h3 className="newUserTitle">Add New User</h3>
          <form action="" className="newUserform">
              <div className="newUserItem">
                  <label>UserName</label>
                  <input type="text" className="newUserInput" placeholder='jhon11' />
              </div>
              <div className="newUserItem">
                  <label>Full Name</label>
                  <input type="text" className="newUserInput" placeholder='david jhon' />
              </div>
              <div className="newUserItem">
                  <label>Email</label>
                  <input type="text" className="newUserInput" placeholder='jhon@gmail.com' />
              </div>
              <div className="newUserItem">
                  <label>Password</label>
                  <input type="password" className="newUserInput"  />
              </div>
              <div className="newUserItem">
                  <label>Phone</label>
                  <input type="text" className="newUserInput" placeholder='+1 2345 446 23' />
              </div>
              <div className="newUserItem">
                  <label>Address</label>
                  <input type="text" className="newUserInput" placeholder='New York | USA' />
              </div>
              <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                  <input type="radio" name='gender' id='male' value="male" />
                  <label For="male">Male</label>
                  <input type="radio" name='gender' id='female' value="female" />
                  <label For="female">Female</label>
                  <input type="radio" name='gender' id='other' value="other" />
                  <label For="other">Other</label>


                  </div>
                  
              </div>
              <div className="newUserItem">
                  <label>Active</label>
                 <select className='newUserSelect' name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="no">No</option>
                 </select>
                
              </div>
              <button  className="newUserButton">Create</button>
              
          </form>

      </div>
  );
};

export default NewUser;
