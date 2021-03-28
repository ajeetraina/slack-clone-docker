

import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './component/Header'
import SideBar from './component/SideBar'
import Chat from './component/Chat'
import Login from './component/Login'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    // BEM naming convention
    <div className="App"> 
   
    <BrowserRouter >
    {!user ? <Login setUser={setUser} />: (

      <>
      <Header />
    <div className="app__body">
        <SideBar user={user} /> 

        <Switch>
          <Route path="/room/:roomID">          
            {/* chat component is using use params hook   */}
            <Chat />

          </Route>

        </Switch>
        
                   
      </div>
   </>


    )}
   

    </BrowserRouter>

    </div>
  );
}

export default App;
