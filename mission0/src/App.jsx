import './App.css'

const Box =({ word }) => {
  return (
    <div style={{margin: '3%'}}>
      <p>{word}</p>
    </div>
  )
}

const Card = () => {
  return (
    <div>
      <div>

      </div>
      <div>
        <p>Loren Ipsum</p>
      </div>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <div className='header'>
        <div>
          <Box word= "My company"/>
        </div>
        <div className='nav'>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Login"/>
        </div>
      </div>

      <div className='body'>
        <div>
          <h2>Loren ipsum dolor sit amit</h2>
        </div>
        <div>
          <input name="myInput" />
          <button>Search</button>
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
