import './App.css'

const Box =({ word }) => {
  return (
    <div>
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
      <div>
        <div>
          <Box word= "My company"/>
        </div>
        <div>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Login"/>
        </div>
      </div>

      <div>
        <div>
          <h2>Loren ipsum dolor sit amit</h2>
        </div>
        <div>
          <input name="myInput" />
          <button>Search</button>
        </div>
      </div>

      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  )
}

export default App
