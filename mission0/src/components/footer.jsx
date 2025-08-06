import '../styles/footer.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='upperCard'>
          <img src='./placeholder.svg' alt='placeholder'
            className='cardImage'/>
      </div>
      <div className='bottomText'>
        <h4>Loren Ipsum</h4>
        <p>dolor sit amet</p>
      </div>
    </div>
  )
}

function Footer(props) {
    if (props.width >= 600) {
        return(
            <div className='footer' >
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
    else {
        return(
            <div className='footer'>
                <Card/>
            </div>
        );
    }

}

export default Footer