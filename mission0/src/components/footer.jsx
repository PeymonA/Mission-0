import '../styles/footer.css'

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