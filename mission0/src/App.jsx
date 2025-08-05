import './App.css'

const Box =({ word }) => {
  return (
    <div style={{margin: '3%'}}>
      <span style={{ whiteSpace: 'nowrap' }}>{word}</span>
    </div>
  )
}

const Card = () => {
  return (
    <div className='card'>
      <div style={{backgroundColor: 'rgb(230, 230, 230)'}}>
          <img src='./placeholder.svg' alt='placeholder'
            style={{width:'40%'}}/>
      </div>
      <div style={{backgroundColor:'rgb(198, 198, 198)', textAlign: 'left', paddingLeft:'5%'}}>
        <h4>Loren Ipsum</h4>
        <p>dolor sit amet</p>
      </div>
    </div>
  )
}

const App = () => {
  return(
    <div className= "page">


      <div className='header'>
        <div className='headerLeft'>
          <div>
            <img src='./circle-256.gif' alt='placeholderLogo'
              style={{width:'100%'}}/>
          </div>
            <Box word= "My Company"/>
        </div>
        <div className='nav'>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <div className='input'>
            <span style={{ whiteSpace: 'nowrap' }}>Log In</span>
          </div>  
        </div>
      </div>


      <div className='body'>
        <div className='bodyLeft'>
          <h1 style={{color:'white'}}>
            Loren ipsum <br/> dolor sit amit
          </h1>
        </div>
        <div className='bodyRight'>
          <div>
            <img src='./placeholder.svg' alt='placeholder'
              style={{width:'25%'}}/>
          </div>
          <form>
            <input name="myInput"/>
            <button className='myButton'>Search</button>
          </form>
        </div>
        <div className='bodySpacer' /> 
      </div>


      <div className='footer'>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  )
}

export default App
