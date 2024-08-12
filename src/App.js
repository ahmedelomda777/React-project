import React,{useState , useEffect} from 'react'
import { BrowserRouter, Route,Routes,Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './Home'
import Nav from './Nav'
import Contact from './Contact';
import DotLoader from "react-spinners/DotLoader"
import { HashRouter } from 'react-router-dom';
import Latest from './Latest';
const App = () => {


  const [loading,setloding]=useState(false)
  useEffect(()=>{
  setloding(true)
  setTimeout(() => {
    setloding(false)

  }, 3000);
  },[])
  return (
    <div className='body'>
    <HashRouter>
    
    {loading ?
    <div className='loading' > <DotLoader    size={120} color="#00ADB5"/></div> :
  <>
  <Nav/>
 
<Routes>
  <Route path='/' element= {<Home/>} />
  <Route path='/contact' element= {<Contact/>} />
  <Route path='/latest' element= {<Latest/>} />
</Routes>
</>
    }
    </HashRouter>
    </div>

  )
}

export default App