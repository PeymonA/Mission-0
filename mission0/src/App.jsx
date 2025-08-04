import './App.css'

const Box =({ word }) => {
  return (
    <div>
      <p>{word}</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <header>
        <div>
          <Box word= "My company"/>
        </div>
        <div>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Word"/>
          <Box word= "Login"/>
        </div>
      </header>

    </div>
  )
}

export default App
