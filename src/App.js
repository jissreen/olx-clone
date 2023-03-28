import React ,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import View from './Pages/ViewPost'
import Context from './Components/store/Context';
import Create from './Pages/Create'
import { AuthContext,FirebaseContext } from './Components/store/Context';
import Post from './Components/store/PostContext';

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
      <Post>
      <Router>
        
        
          <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/Login'>
        <Login />

</Route>
<Route path='/Signup'>

        <Signup />

</Route>
<Route path='/Create'>
  
  <Create />

</Route>

<Route path='/View'>
  
  <View />

</Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
