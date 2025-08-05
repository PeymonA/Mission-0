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
      <div>
          <img src='./placeholder.svg' alt='placeholder'
            style={{width:'40%'}}/>
      </div>
      <div>
        <p>Loren Ipsum</p>
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
            <img src='./logoipsum.svg' alt='placeholderLogo'
              />
          </div>
            <Box word= "My Company"/>
        </div>
        <div className='nav'>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Log In"/>
        </div>
      </div>


      <div className='body'>
        <div style={{alignSelf: 'flex-start'}}>
          <h1>Loren ipsum</h1>
          <h1>dolor sit amit</h1>
        </div>
        <div style={{alignSelf:'flex-end'}}>
          <div>
            <img src='./placeholder.svg' alt='placeholder'
              style={{width:'25%'}}/>
          </div>
          <form>
            <input name="myInput" />
            <button>Search</button>
          </form>
        </div>
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
