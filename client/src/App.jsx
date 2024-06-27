import React from'react'
import {BrowserRouter, Route} from'react-router-dom';
import Home from './pages/Home';
export default function App(){
  return <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/" element = {<About />}/>
      <Route path = "/" element = {<Signin />}/>
      <Route path = "/" element = {<SignUp />}/>
      <Route path = "/" element = {<Profile />}/>
    </Routes>
    </BrowserRouter>

}