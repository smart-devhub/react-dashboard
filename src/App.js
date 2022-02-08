
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import './app.css'
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserList from './components/UserList';
import UserPage from './components/UserPage';
import NewUser from './components/NewUser';

function App() {
  return (
    <Router>
    <div className="App">
       <Topbar />
       <div className='Container'>
         <Sidebar />
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserList/>}/>
        <Route path="/user/:id" element={<UserPage/>} />
        <Route path="/newUser" element={<NewUser/>}/>
        </Routes> 
         
       </div>
    </div>
    </Router>
  );
}

export default App;
