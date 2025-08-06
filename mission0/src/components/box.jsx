import '../styles/box.css'

const Box =({ word }) => {
  return (
    <div className="box">
      <span style={{ whiteSpace: 'nowrap' }}>{word}</span>
    </div>
  )
}

export default Box