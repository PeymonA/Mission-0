import * as React from "react";

import './App.css'
import { useWindowSize } from "@uidotdev/usehooks";

import Box from './components/box.jsx';
import Nav from './components/nav.jsx';
import BodyRight from "./components/bodyRight.jsx";
import Footer from "./components/footer.jsx";


const App = () => {
  const size = useWindowSize();

  return(
    <>

      <div className= "page">
        <div className='header'>
          <div className='headerLeft'>
            <div>
              <img src='./circle-256.gif' alt='placeholderLogo'
                className='circle'/>
            </div>
              <Box word= "My Company"/>
          </div>
          <Nav width={size.width}/>
        </div>

        <div className='body'>
          <div className='bodyLeft'>
            <h1 style={{color:'white'}}>
              Loren ipsum <br/> dolor sit amit
            </h1>
          </div>
          <BodyRight width={size.width}/>
          <div className='bodySpacer' /> 
        </div>

        <div className='footer'>
            <Footer width={size.width}/>
        </div>

      </div>
    </>
  )
}

export default App
